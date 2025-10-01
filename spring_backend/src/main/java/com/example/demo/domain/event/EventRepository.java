package com.example.demo.domain.event;

import com.example.demo.core.generic.AbstractRepository;
import com.example.demo.domain.user.User;
import java.util.List;
import java.util.UUID;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends AbstractRepository<Event> {

  List<Event> findByCreator(User creator);

  @Query("SELECT e FROM Event e WHERE e.creator.id = :userId OR :user MEMBER OF e.participants")
  List<Event> findByCreatorOrParticipant(@Param("userId") UUID userId, @Param("user") User user);

  @Query("SELECT p FROM Event e JOIN e.participants p WHERE e.id = :eventId")
  Page<User> findParticipantsByEventId(@Param("eventId") UUID eventId, Pageable pageable);

  @Query("SELECT COUNT(p) FROM Event e JOIN e.participants p WHERE e.id = :eventId")
  Long countParticipants(@Param("eventId") UUID eventId);
}