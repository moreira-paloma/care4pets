package com.care4pets.care4pets.service;

import com.care4pets.care4pets.dto.TutorRequestDTO;
import com.care4pets.care4pets.dto.TutorResponseDTO;
import com.care4pets.care4pets.dto.PetResponseDTO;
import com.care4pets.care4pets.model.Tutor;
import com.care4pets.care4pets.repository.TutorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TutorService {

    private final TutorRepository tutorRepository;

    public TutorService(TutorRepository tutorRepository) {
        this.tutorRepository = tutorRepository;
    }

    public TutorResponseDTO create(TutorRequestDTO dto) {
        Tutor tutor = Tutor.builder()
                .name(dto.name())
                .phone(dto.phone())
                .email(dto.email())
                .build();

        Tutor saved = tutorRepository.save(tutor);
        return toResponse(saved);
    }

    public List<TutorResponseDTO> list() {
        return tutorRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public TutorResponseDTO getById(Long id) {
        Tutor tutor = tutorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tutor not found"));

        return toResponse(tutor);
    }

    public TutorResponseDTO update(Long id, TutorRequestDTO dto) {
        Tutor tutor = tutorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tutor not found"));

        tutor.setName(dto.name());
        tutor.setPhone(dto.phone());
        tutor.setEmail(dto.email());

        Tutor updated = tutorRepository.save(tutor);

        return toResponse(updated);
    }

    public void delete(Long id) {
        tutorRepository.deleteById(id);
    }

    public List<PetResponseDTO> getPetsByTutor(Long id) {
        Tutor tutor = tutorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tutor not found"));

        return tutor.getPets()
                .stream()
                .map(pet -> new PetResponseDTO(
                        pet.getId(),
                        pet.getName(),
                        pet.getSpecies(),
                        pet.getBreed(),
                        pet.getAge(),
                        pet.getWeight(),
                        tutor.getId(),
                        tutor.getName()
                ))
                .toList();
    }

    private TutorResponseDTO toResponse(Tutor tutor) {
        return new TutorResponseDTO(
                tutor.getId(),
                tutor.getName(),
                tutor.getPhone(),
                tutor.getEmail()
        );
    }
}