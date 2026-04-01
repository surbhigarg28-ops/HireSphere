package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Application;

@Repository
public interface ApplicationRepository extends MongoRepository<Application, String> {
	
	List<Application> findByCandidateId(String candidateId);

    List<Application> findByJobId(String jobId);
}
