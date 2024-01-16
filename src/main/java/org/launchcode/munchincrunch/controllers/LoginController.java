package org.launchcode.munchincrunch.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/LoginPage")
    public String login() {
        return "LoginPage";
    }
}

//http://localhost:8080/api/LoginPage