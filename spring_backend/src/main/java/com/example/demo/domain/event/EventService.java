package com.example.demo.domain.event;

import com.example.demo.core.generic.AbstractService;
import com.example.demo.domain.user.User;
import java.util.List;
import java.util.UUID;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EventService extends AbstractService<Event> {

  Event createEvent(Event event, User creator);

  Event updateEvent(UUID id, Event event);

  Event addParticipant(UUID eventId, UUID userId);

  Event removeParticipant(UUID eventId, UUID userId);

  List<Event> findEventsByUser(User user);

  Page<User> getParticipants(UUID eventId, Pageable pageable);

  boolean canUserJoinEvent(User user, Event event);

  boolean isUserCreatorOrAdmin(User user, Event event);
}