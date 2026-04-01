package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Application;
import com.example.demo.entity.Job;
import com.example.demo.entity.Profile;
import com.example.demo.repository.ApplicationRepository;
import com.example.demo.repository.JobRepository;
import com.example.demo.repository.ProfileRepository;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private ProfileRepository profileRepository;

    public Application applyJob(Application application) {
    	// fetch profile
        Profile profile = profileRepository.findByUserId(application.getCandidateId());
        // fetch job
        Job job = jobRepository.findById(application.getJobId()).orElse(null);
        double match = 0;
        if (profile != null && job != null) {
            match = calculateMatch(profile.getSkills(), job.getRequiredSkills());
        }
        application.setMatchPercentage(match);
        application.setStatus("APPLIED");

        return applicationRepository.save(application);
    }
    
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    public List<Application> getApplicationsByUser(String userId) {
        return applicationRepository.findByCandidateId(userId);
    }

    public List<Application> getApplicationsByJob(String jobId) {
        return applicationRepository.findByJobId(jobId);
    }

    // Skill Matching Logic
    private double calculateMatch(List<String> userSkills, List<String> jobSkills) {

    	if (userSkills == null || jobSkills == null || jobSkills.isEmpty()) {
            return 0;
        }
        int matchCount = 0;
        for (String skill : jobSkills) {
            if (userSkills.contains(skill)) {
                matchCount++;
            }
        }
        return (matchCount * 100.0) / jobSkills.size();
    }
}