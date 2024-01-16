package org.launchcode.munchincrunch.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "HomePage";
    }
}

//When the user goes to the main page of this web app,
// the HomeController is in control. It says, "Show them the 'home' page,"
// and the framework takes care of finding and displaying the appropriate content.