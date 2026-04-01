package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Profile;

@Repository
public interface ProfileRepository extends MongoRepository<Profile, String> {

	Profile findByUserId(String userId);
}
