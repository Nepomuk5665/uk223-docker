package com.example.demo.domain.event.dto;

import com.example.demo.core.generic.AbstractMapper;
import com.example.demo.domain.event.Event;
import com.example.demo.domain.user.User;
import com.example.demo.domain.user.dto.UserMapper;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", uses = UserMapper.class, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface EventMapper extends AbstractMapper<Event, EventDTO> {

  @Mapping(target = "participants", source = "participants")
  EventDTO toDTO(Event event);

  @Mapping(target = "participants", source = "participants")
  Event fromDTO(EventDTO dto);

  @Mapping(target = "id", ignore = true)
  @Mapping(target = "creator", ignore = true)
  @Mapping(target = "participants", ignore = true)
  Event fromCreateDTO(EventCreateDTO dto);

  default Set<User> mapParticipantIds(Set<UUID> participantIds) {
    if (participantIds == null) {
      return Set.of();
    }
    return participantIds.stream()
        .map(id -> {
          User user = new User();
          user.setId(id);
          return user;
        })
        .collect(Collectors.toSet());
  }
}