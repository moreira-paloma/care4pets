package com.care4pets.care4pets.service;

import com.care4pets.care4pets.model.Pet;
import com.care4pets.care4pets.repository.PetRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {

    private final PetRepository petRepository;

    public PetService(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    public Pet create(Pet pet) {
        return petRepository.save(pet);
    }

    public List<Pet> list() {
        return petRepository.findAll();
    }

    public Pet getById(Long id) {
        return petRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pet não encontrado"));
    }

    public Pet update(Long id, Pet pet) {
        Pet existing = getById(id);

        existing.setName(pet.getName());
        existing.setAge(pet.getAge());
        existing.setSpecies(pet.getSpecies());
        existing.setBreed(pet.getBreed());
        existing.setWeight(pet.getWeight());


        return petRepository.save(existing);
    }

    public void delete(Long id) {
        petRepository.deleteById(id);
    }
}