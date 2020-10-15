package com.balloon.events.controller;

import com.balloon.events.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class TestController {

    private final TestService testService;

    @Autowired
    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping("/all")
    public String allAccess() {
        return testService.generatePublicContent();
    }

    @GetMapping("/user")
    public String userAccess() {
        return testService.generateUserContent();
    }

    @GetMapping("/mod")
    public String moderatorAccess() {
        return testService.generateModContent();
    }

    @GetMapping("/admin")
    public String adminAccess() {
        return testService.generateAdminContent();
    }
}

