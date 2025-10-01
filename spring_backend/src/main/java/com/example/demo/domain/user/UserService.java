package com.example.demo.domain.user;

import com.example.demo.core.generic.AbstractService;
import java.util.List;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService, AbstractService<User> {
  User register(User user);

  User registerUser(User user);

  List<User> findAllActiveUsers();
}
