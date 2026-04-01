package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Job;
import com.example.demo.entity.Profile;
import com.example.demo.repository.JobRepository;
import com.example.demo.repository.ProfileRepository;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private ProfileRepository profileRepository;

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public List<Job> getJobsByRecruiter(String recruiterId) {
        return jobRepository.findByRecruiterId(recruiterId);
    }

    // 🔥 MATCH JOBS FOR USER
    public List<Job> getMatchingJobs(String userId) {

        Profile profile = profileRepository.findByUserId(userId);

        List<Job> jobs = jobRepository.findAll();

        return jobs.stream()
                .sorted((j1, j2) -> Double.compare(
                        calculateMatch(profile.getSkills(), j2.getRequiredSkills()),
                        calculateMatch(profile.getSkills(), j1.getRequiredSkills())
                ))
                .toList();
    }

    private double calculateMatch(List<String> userSkills, List<String> jobSkills) {
        int match = 0;

        for (String skill : userSkills) {
            if (jobSkills.contains(skill)) {
                match++;
            }
        }

        return (double) match / jobSkills.size();
    }
}
