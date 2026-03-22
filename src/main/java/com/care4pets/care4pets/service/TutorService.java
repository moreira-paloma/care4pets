package com.care4pets.care4pets.service;

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

    public Tutor create(Tutor tutor) {
        return tutorRepository.save(tutor);
    }

    public List<Tutor> list() {
        return tutorRepository.findAll();
    }

    public Tutor getById(Long id) {
        return tutorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tutor não encontrado"));
    }

    public Tutor update(Long id, Tutor tutor) {
        Tutor existing = getById(id);

        existing.setName(tutor.getName());
        existing.setPhone(tutor.getPhone());
        existing.setEmail(tutor.getEmail());

        return tutorRepository.save(existing);
    }

    public void delete(Long id) {
        tutorRepository.deleteById(id);
    }
}