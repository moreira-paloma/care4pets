package com.care4pets.care4pets.repository;

import com.care4pets.care4pets.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {

    List<Pet> findBySpeciesIgnoreCase(String species);

    List<Pet> findByTutorId(Long tutorId);

    List<Pet> findByAgeGreaterThanEqual(Integer age);

    List<Pet> findByAgeLessThanEqual(Integer age);

    List<Pet> findByWeightGreaterThanEqual(Double weight);

    List<Pet> findByWeightLessThanEqual(Double weight);
}