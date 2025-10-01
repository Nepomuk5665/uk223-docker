package com.example.demo.domain.event;

import com.example.demo.domain.event.dto.EventCreateDTO;
import com.example.demo.domain.event.dto.EventDTO;
import com.example.demo.domain.event.dto.EventMapper;
import com.example.demo.domain.user.User;
import com.example.demo.domain.user.UserDetailsImpl;
import com.example.demo.domain.user.UserService;
import com.example.demo.domain.user.dto.UserDTO;
import com.example.demo.domain.user.dto.UserMapper;
import java.util.List;
import java.util.UUID;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping("/events")
public class EventController {

  private final EventService eventService;
  private final EventMapper eventMapper;
  private final UserService userService;
  private final UserMapper userMapper;

  @Autowired
  public EventController(EventService eventService, EventMapper eventMapper,
                        UserService userService, UserMapper userMapper) {
    this.eventService = eventService;
    this.eventMapper = eventMapper;
    this.userService = userService;
    this.userMapper = userMapper;
  }

  // UC1: User creates an event
  @PostMapping
  @PreAuthorize("hasAuthority('EVENT_CREATE')")
  public ResponseEntity<EventDTO> createEvent(@Valid @RequestBody EventCreateDTO dto,
                                              @AuthenticationPrincipal UserDetailsImpl userDetails) {
    Event event = eventMapper.fromCreateDTO(dto);

    // Add initial participants if provided
    if (dto.getParticipantIds() != null && !dto.getParticipantIds().isEmpty()) {
      for (UUID participantId : dto.getParticipantIds()) {
        User participant = userService.findById(participantId);
        if (eventService.canUserJoinEvent(participant, event)) {
          event.addParticipant(participant);
        }
      }
    }

    Event created = eventService.createEvent(event, userDetails.user());
    return new ResponseEntity<>(eventMapper.toDTO(created), HttpStatus.CREATED);
  }

  // UC2: Event creator or admin edits event
  @PutMapping("/{id}")
  @PreAuthorize("hasAuthority('EVENT_MODIFY') || @eventPermissionEvaluator.isCreator(authentication.principal.user,#id)")
  public ResponseEntity<EventDTO> updateEvent(@PathVariable UUID id,
                                              @Valid @RequestBody EventDTO dto,
                                              @AuthenticationPrincipal UserDetailsImpl userDetails) {
    Event existingEvent = eventService.findById(id);

    if (!eventService.isUserCreatorOrAdmin(userDetails.user(), existingEvent)) {
      return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    Event event = eventMapper.fromDTO(dto);
    Event updated = eventService.updateEvent(id, event);
    return new ResponseEntity<>(eventMapper.toDTO(updated), HttpStatus.OK);
  }

  // UC2: Add participant to event
  @PostMapping("/{eventId}/participants/{userId}")
  @PreAuthorize("hasAuthority('EVENT_MODIFY') || @eventPermissionEvaluator.isCreator(authentication.principal.user,#eventId)")
  public ResponseEntity<EventDTO> addParticipant(@PathVariable UUID eventId,
                                                 @PathVariable UUID userId,
                                                 @AuthenticationPrincipal UserDetailsImpl userDetails) {
    Event event = eventService.findById(eventId);

    if (!eventService.isUserCreatorOrAdmin(userDetails.user(), event)) {
      return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    Event updated = eventService.addParticipant(eventId, userId);
    return new ResponseEntity<>(eventMapper.toDTO(updated), HttpStatus.OK);
  }

  // Remove participant from event
  @DeleteMapping("/{eventId}/participants/{userId}")
  @PreAuthorize("hasAuthority('EVENT_MODIFY') || @eventPermissionEvaluator.isCreator(authentication.principal.user,#eventId)")
  public ResponseEntity<Void> removeParticipant(@PathVariable UUID eventId,
                                                @PathVariable UUID userId,
                                                @AuthenticationPrincipal UserDetailsImpl userDetails) {
    Event event = eventService.findById(eventId);

    if (!eventService.isUserCreatorOrAdmin(userDetails.user(), event)) {
      return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    eventService.removeParticipant(eventId, userId);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

  // UC3: All users see event information
  @GetMapping("/{id}")
  @PreAuthorize("hasAuthority('EVENT_VIEW')")
  public ResponseEntity<EventDTO> getEvent(@PathVariable UUID id) {
    Event event = eventService.findById(id);
    return new ResponseEntity<>(eventMapper.toDTO(event), HttpStatus.OK);
  }

  // UC3: List all events
  @GetMapping
  @PreAuthorize("hasAuthority('EVENT_VIEW')")
  public ResponseEntity<List<EventDTO>> getAllEvents() {
    List<Event> events = eventService.findAll();
    return new ResponseEntity<>(eventMapper.toDTOs(events), HttpStatus.OK);
  }

  // Get user's events (as creator or participant)
  @GetMapping("/my")
  @PreAuthorize("hasAuthority('EVENT_VIEW')")
  public ResponseEntity<List<EventDTO>> getMyEvents(@AuthenticationPrincipal UserDetailsImpl userDetails) {
    List<Event> events = eventService.findEventsByUser(userDetails.user());
    return new ResponseEntity<>(eventMapper.toDTOs(events), HttpStatus.OK);
  }

  // UC4: List participants with pagination
  @GetMapping("/{eventId}/participants")
  @PreAuthorize("hasAuthority('EVENT_VIEW')")
  public ResponseEntity<Page<UserDTO>> getParticipants(@PathVariable UUID eventId,
                                                       @PageableDefault(size = 10) Pageable pageable) {
    Page<User> participants = eventService.getParticipants(eventId, pageable);
    Page<UserDTO> participantDTOs = participants.map(userMapper::toDTO);
    return new ResponseEntity<>(participantDTOs, HttpStatus.OK);
  }

  // Delete event
  @DeleteMapping("/{id}")
  @PreAuthorize("hasAuthority('EVENT_DELETE') || @eventPermissionEvaluator.isCreator(authentication.principal.user,#id)")
  public ResponseEntity<Void> deleteEvent(@PathVariable UUID id,
                                          @AuthenticationPrincipal UserDetailsImpl userDetails) {
    Event event = eventService.findById(id);

    if (!eventService.isUserCreatorOrAdmin(userDetails.user(), event)) {
      return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    eventService.deleteById(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
}