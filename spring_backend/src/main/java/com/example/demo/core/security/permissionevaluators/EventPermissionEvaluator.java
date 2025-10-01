package com.example.demo.core.security.permissionevaluators;

import com.example.demo.domain.event.Event;
import com.example.demo.domain.event.EventRepository;
import com.example.demo.domain.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class EventPermissionEvaluator {

  private final EventRepository eventRepository;

  public boolean isCreator(User principal, UUID eventId) {
    if (principal == null || eventId == null) {
      return false;
    }

    Event event = eventRepository.findById(eventId).orElse(null);
    if (event == null) {
      return false;
    }

    return event.getCreator().getId().equals(principal.getId());
  }

  public boolean canModify(User principal, UUID eventId) {
    // Creator can modify their own events
    return isCreator(principal, eventId);
  }
}