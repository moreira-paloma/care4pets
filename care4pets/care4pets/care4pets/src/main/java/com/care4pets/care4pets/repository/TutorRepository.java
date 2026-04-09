package com.care4pets.care4pets.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.care4pets.care4pets.model.Tutor;

import java.util.List;
import java.util.Optional;

public interface TutorRepository extends JpaRepository<Tutor, Long> {

    List<Tutor> findByNameContainingIgnoreCase(String name);

    Optional<Tutor> findByEmail(String email);

    Optional<Tutor> findByPhone(String phone);
}