package com.example.demo.domain.event;

import com.example.demo.core.generic.AbstractEntity;
import com.example.demo.domain.user.User;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Table(name = "event")
@NoArgsConstructor
@Getter
@Setter
@Accessors(chain = true)
public class Event extends AbstractEntity {

  @NotBlank(message = "Event name is required")
  @Size(min = 3, max = 100, message = "Event name must be between 3 and 100 characters")
  @Column(name = "name", nullable = false)
  private String name;

  @NotBlank(message = "Location is required")
  @Size(min = 3, max = 200, message = "Location must be between 3 and 200 characters")
  @Column(name = "location", nullable = false)
  private String location;

  @Future(message = "Event date must be in the future")
  @Column(name = "event_date", nullable = false)
  private LocalDateTime eventDate;

  @Size(max = 500, message = "Description cannot exceed 500 characters")
  @Column(name = "description", length = 500)
  private String description;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "creator_id", nullable = false)
  private User creator;

  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(
      name = "event_participants",
      joinColumns = @JoinColumn(name = "event_id"),
      inverseJoinColumns = @JoinColumn(name = "user_id")
  )
  private Set<User> participants = new HashSet<>();

  public Event(UUID id, String name, String location, LocalDateTime eventDate, String description, User creator) {
    super(id);
    this.name = name;
    this.location = location;
    this.eventDate = eventDate;
    this.description = description;
    this.creator = creator;
  }

  public boolean addParticipant(User user) {
    return participants.add(user);
  }

  public boolean removeParticipant(User user) {
    return participants.remove(user);
  }
}