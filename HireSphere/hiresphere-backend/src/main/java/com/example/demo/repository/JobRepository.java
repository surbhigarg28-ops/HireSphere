package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Job;

@Repository
public interface JobRepository extends MongoRepository<Job, String> {
	List<Job> findByRecruiterId(String recruiterId);
}
