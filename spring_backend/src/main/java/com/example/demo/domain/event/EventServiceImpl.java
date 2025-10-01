package com.example.demo.domain.event;

import com.example.demo.core.generic.AbstractServiceImpl;
import com.example.demo.domain.role.Role;
import com.example.demo.domain.user.User;
import com.example.demo.domain.user.UserService;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class EventServiceImpl extends AbstractServiceImpl<Event> implements EventService {

  private final UserService userService;

  @Autowired
  public EventServiceImpl(EventRepository repository, UserService userService) {
    super(repository);
    this.userService = userService;
  }

  @Override
  @Transactional
  public Event createEvent(Event event, User creator) {
    event.setCreator(creator);
    return save(event);
  }

  @Override
  @Transactional
  public Event updateEvent(UUID id, Event event) {
    Event existingEvent = findById(id);
    existingEvent.setName(event.getName());
    existingEvent.setLocation(event.getLocation());
    existingEvent.setEventDate(event.getEventDate());
    existingEvent.setDescription(event.getDescription());
    return save(existingEvent);
  }

  @Override
  @Transactional
  public Event addParticipant(UUID eventId, UUID userId) {
    Event event = findById(eventId);
    User user = userService.findById(userId);

    if (!canUserJoinEvent(user, event)) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
          "Administrators cannot join events as participants");
    }

    if (event.getCreator().getId().equals(userId)) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
          "Event creator cannot be added as participant");
    }

    event.addParticipant(user);
    return save(event);
  }

  @Override
  @Transactional
  public Event removeParticipant(UUID eventId, UUID userId) {
    Event event = findById(eventId);
    User user = userService.findById(userId);
    event.removeParticipant(user);
    return save(event);
  }

  @Override
  public List<Event> findEventsByUser(User user) {
    EventRepository repo = (EventRepository) repository;
    return repo.findByCreatorOrParticipant(user.getId(), user);
  }

  @Override
  public Page<User> getParticipants(UUID eventId, Pageable pageable) {
    EventRepository repo = (EventRepository) repository;
    return repo.findParticipantsByEventId(eventId, pageable);
  }

  @Override
  public boolean canUserJoinEvent(User user, Event event) {
    // UC5: Prevent administrators from joining as participants
    return user.getRoles().stream()
        .noneMatch(role -> role.getName().equals("ADMIN"));
  }

  @Override
  public boolean isUserCreatorOrAdmin(User user, Event event) {
    boolean isCreator = event.getCreator().getId().equals(user.getId());
    boolean isAdmin = user.getRoles().stream()
        .anyMatch(role -> role.getName().equals("ADMIN"));
    return isCreator || isAdmin;
  }
}