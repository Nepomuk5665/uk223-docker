package com.example.demo.domain.event.dto;

import com.example.demo.core.generic.AbstractDTO;
import com.example.demo.domain.user.dto.UserDTO;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@NoArgsConstructor
@Getter
@Setter
@Accessors(chain = true)
public class EventDTO extends AbstractDTO {

  @NotBlank(message = "Event name is required")
  @Size(min = 3, max = 100, message = "Event name must be between 3 and 100 characters")
  private String name;

  @NotBlank(message = "Location is required")
  @Size(min = 3, max = 200, message = "Location must be between 3 and 200 characters")
  private String location;

  @Future(message = "Event date must be in the future")
  private LocalDateTime eventDate;

  @Size(max = 500, message = "Description cannot exceed 500 characters")
  private String description;

  private UserDTO creator;

  private Set<UserDTO> participants;

  public EventDTO(UUID id, String name, String location, LocalDateTime eventDate,
                  String description, UserDTO creator, Set<UserDTO> participants) {
    super(id);
    this.name = name;
    this.location = location;
    this.eventDate = eventDate;
    this.description = description;
    this.creator = creator;
    this.participants = participants;
  }
}