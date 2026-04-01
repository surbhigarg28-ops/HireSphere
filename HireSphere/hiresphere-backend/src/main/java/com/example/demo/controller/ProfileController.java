package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Profile;
import com.example.demo.service.ProfileService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/profiles")
public class ProfileController {
	
	@Autowired
	private ProfileService profileService;

    @PostMapping("/create")
    public Profile createProfile(@RequestBody Profile profile){
        return profileService.createProfile(profile);
    }

    @GetMapping("/all")
    public List<Profile> getProfiles(){
        return profileService.getAllProfiles();
    }
}
