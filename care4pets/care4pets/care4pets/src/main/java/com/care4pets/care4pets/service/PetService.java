package com.care4pets.care4pets.service;

import com.care4pets.care4pets.dto.PetRequestDTO;
import com.care4pets.care4pets.dto.PetResponseDTO;
import com.care4pets.care4pets.model.Pet;
import com.care4pets.care4pets.model.Tutor;
import com.care4pets.care4pets.repository.PetRepository;
import com.care4pets.care4pets.repository.TutorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {

    private final PetRepository petRepository;
    private final TutorRepository tutorRepository;

    public PetService(PetRepository petRepository, TutorRepository tutorRepository) {
        this.petRepository = petRepository;
        this.tutorRepository = tutorRepository;
    }

    public PetResponseDTO create(PetRequestDTO dto) {
        Tutor tutor = tutorRepository.findById(dto.tutorId())
                .orElseThrow(() -> new RuntimeException("Tutor not found"));

        Pet pet = Pet.builder()
                .name(dto.name())
                .species(dto.species())
                .breed(dto.breed())
                .age(dto.age())
                .weight(dto.weight())
                .tutor(tutor)
                .build();

        Pet saved = petRepository.save(pet);

        return toResponse(saved);
    }

    public List<PetResponseDTO> list() {
        return petRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public PetResponseDTO getById(Long id) {
        Pet pet = petRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pet not found"));

        return toResponse(pet);
    }

    public PetResponseDTO update(Long id, PetRequestDTO dto) {
        Pet pet = petRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pet not found"));

        Tutor tutor = tutorRepository.findById(dto.tutorId())
                .orElseThrow(() -> new RuntimeException("Tutor not found"));

        pet.setName(dto.name());
        pet.setSpecies(dto.species());
        pet.setBreed(dto.breed());
        pet.setAge(dto.age());
        pet.setWeight(dto.weight());
        pet.setTutor(tutor);

        Pet updated = petRepository.save(pet);

        return toResponse(updated);
    }

    public void delete(Long id) {
        petRepository.deleteById(id);
    }

    private PetResponseDTO toResponse(Pet pet) {
        return new PetResponseDTO(
                pet.getId(),
                pet.getName(),
                pet.getSpecies(),
                pet.getBreed(),
                pet.getAge(),
                pet.getWeight(),
                pet.getTutor().getId(),
                pet.getTutor().getName()
        );
    }
}