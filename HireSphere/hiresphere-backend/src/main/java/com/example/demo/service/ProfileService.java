package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Profile;
import com.example.demo.repository.ProfileRepository;

@Service
public class ProfileService {
	
	@Autowired
	private ProfileRepository profileRepository;

	public Profile createProfile(Profile profile) {

	    Profile existing = profileRepository.findByUserId(profile.getUserId());

	    if(existing != null){
	        existing.setEducation(profile.getEducation());
	        existing.setExperience(profile.getExperience());
	        existing.setSkills(profile.getSkills());
	        return profileRepository.save(existing);
	    }

	    return profileRepository.save(profile);
	}

    public List<Profile> getAllProfiles(){
        return profileRepository.findAll();
    }
}
