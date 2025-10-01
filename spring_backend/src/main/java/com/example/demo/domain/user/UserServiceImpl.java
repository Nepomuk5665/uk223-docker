package com.example.demo.domain.user;

import com.example.demo.core.generic.AbstractServiceImpl;
import com.example.demo.domain.role.Role;
import com.example.demo.domain.role.RoleService;
import com.example.demo.domain.event.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;
import java.util.UUID;

@Service
public class UserServiceImpl extends AbstractServiceImpl<User> implements UserService {

  private final PasswordEncoder passwordEncoder;
  private final RoleService roleService;
  private final EventRepository eventRepository;

  @Autowired
  public UserServiceImpl(UserRepository repository, PasswordEncoder passwordEncoder, RoleService roleService, EventRepository eventRepository) {
    super(repository);
    this.passwordEncoder = passwordEncoder;
    this.roleService = roleService;
    this.eventRepository = eventRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    return ((UserRepository) repository).findByEmail(email)
                                        .map(UserDetailsImpl::new)
                                        .orElseThrow(() -> new UsernameNotFoundException(email));
  }

  @Override
  public User register(User user) {
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    Role defaultRole=roleService.findById(UUID.fromString("d29e709c-0ff1-4f4c-a7ef-09f656c390f1"));//Default role
    user.setRoles(Set.of(defaultRole));
    return save(user);
  }
  @Override
  //This Method can be used for development and testing. the Password for the user will be set to "1234"
  public User registerUser(User user){
    user.setPassword(passwordEncoder.encode("1234"));
    return save(user);
  }

  @Override
  public User updateById(UUID id, User entity) {
    User existingUser = findById(id);
    // Preserve the existing password since it's not sent from frontend
    entity.setPassword(existingUser.getPassword());
    // Ensure roles are properly set
    if (entity.getRoles() == null || entity.getRoles().isEmpty()) {
      entity.setRoles(existingUser.getRoles());
    }
    entity.setId(id);
    return repository.save(entity);
  }

  @Override
  @Transactional
  public void deleteById(UUID id) {
    User user = findById(id);

    eventRepository.findAll().forEach(event -> {
      if (event.getCreator().getId().equals(id)) {
        eventRepository.delete(event);
      } else if (event.getParticipants().contains(user)) {
        event.removeParticipant(user);
        eventRepository.save(event);
      }
    });

    super.deleteById(id);
  }

}
