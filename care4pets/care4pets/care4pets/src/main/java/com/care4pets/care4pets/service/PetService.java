package com.care4pets.care4pets.service;

import com.care4pets.care4pets.dto.PetRequestDTO;
import com.care4pets.care4pets.dto.PetResponseDTO;
import com.care4pets.care4pets.exceptions.PetNotFoundException;
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

        Tutor tutor = null;

        if (dto.tutor() != null) {
            tutor = Tutor.builder()
                    .name(dto.tutor().name())
                    .phone(dto.tutor().phone())
                    .email(dto.tutor().email())
                    .build();

            tutor = tutorRepository.save(tutor);
        }

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
                .orElseThrow(() -> new PetNotFoundException(id));

        return toResponse(pet);
    }

    public PetResponseDTO update(Long id, PetRequestDTO dto) {
        Pet pet = petRepository.findById(id)
                .orElseThrow(() -> new PetNotFoundException(id));

        Tutor tutor = pet.getTutor();

        if (dto.tutor() != null) {
            Tutor newTutor = Tutor.builder()
                    .name(dto.tutor().name())
                    .phone(dto.tutor().phone())
                    .email(dto.tutor().email())
                    .build();

            tutor = tutorRepository.save(newTutor);
        }

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
        Pet pet = petRepository.findById(id)
                .orElseThrow(() -> new PetNotFoundException(id));

        petRepository.delete(pet);
    }

    public List<PetResponseDTO> findBySpecies(String species) {
        return petRepository.findBySpeciesIgnoreCase(species)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public List<PetResponseDTO> findByTutor(Long tutorId) {
        return petRepository.findByTutorId(tutorId)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public List<PetResponseDTO> findByAgeMin(Integer age) {
        return petRepository.findByAgeGreaterThanEqual(age)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public List<PetResponseDTO> findByAgeMax(Integer age) {
        return petRepository.findByAgeLessThanEqual(age)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public List<PetResponseDTO> findByWeightMin(Double weight) {
        return petRepository.findByWeightGreaterThanEqual(weight)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public List<PetResponseDTO> findByWeightMax(Double weight) {
        return petRepository.findByWeightLessThanEqual(weight)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    private PetResponseDTO toResponse(Pet pet) {
        Tutor tutor = pet.getTutor();

        return new PetResponseDTO(
                pet.getId(),
                pet.getName(),
                pet.getSpecies(),
                pet.getBreed(),
                pet.getAge(),
                pet.getWeight(),
                tutor != null ? tutor.getId() : null,
                tutor != null ? tutor.getName() : null
        );
    }
}
