package com.balloon.events.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUsers(){
        List<User> users = new ArrayList<>();
        userRepository.findAll()
                .forEach(users::add);
        return users;
    }

    public Optional<User> getUserById(Long id){
        return userRepository.findById(id);
    }

    public User addUser(User user){
        return userRepository.save(user);
    }

    public void updateUser(User user){
        userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}


// package nl.tipsntricks.games.service.security;
//
// import nl.tipsntricks.games.payload.request.SignupRequest;
// import nl.tipsntricks.games.service.AuthorizationService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.stereotype.Component;
//
// import java.util.HashSet;
// import java.util.Set;
//
// @Component
// public class Databasefiller implements CommandLineRunner {
//
//     private final AuthorizationService authorizationService;
//
//     @Autowired
//     public Databasefiller (AuthorizationService authorizationService){
//     this.authorizationService = authorizationService;
// }
// @Override
// public void run(String... args)  {
//
//     Set<String> roles = new HashSet<>();
//     roles.add("admin");
//
//     SignupRequest admin = new SignupRequest();
//     admin.setUsername("admin");
//     admin.setEmail("admin@admin.nl");
//     admin.setPassword("123456");
//     admin.setRole(roles);
//     authorizationService.registerUser(admin);
//
//     SignupRequest user = new SignupRequest();
//     user.setUsername("user");
//     user.setEmail("user@user.nl");
//     user.setPassword("123456");
//     roles.add("user");
//     user.setRole(roles);
//     authorizationService.registerUser(user);
//
//     SignupRequest superuser = new SignupRequest();
//     superuser.setUsername("superuser");
//     superuser.setEmail("super@user.nl");
//     superuser.setPassword("123456");
//     roles.add("admin");
//     superuser.setRole(roles);
//     authorizationService.registerUser(superuser);
//
// }
// }