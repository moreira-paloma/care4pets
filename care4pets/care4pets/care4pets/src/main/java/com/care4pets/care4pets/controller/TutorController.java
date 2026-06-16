package com.care4pets.care4pets.controller;

import com.care4pets.care4pets.dto.TutorRequestDTO;
import com.care4pets.care4pets.dto.TutorResponseDTO;
import com.care4pets.care4pets.dto.PetResponseDTO;
import com.care4pets.care4pets.service.TutorService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tutors")
public class TutorController {

    private final TutorService tutorService;

    public TutorController(TutorService tutorService) {
        this.tutorService = tutorService;
    }

    @PostMapping
    public TutorResponseDTO create(@RequestBody @Valid TutorRequestDTO dto) {
        return tutorService.create(dto);
    }

    @GetMapping
    public List<TutorResponseDTO> list() {
        return tutorService.list();
    }

    @GetMapping("/{id}")
    public TutorResponseDTO getById(@PathVariable Long id) {
        return tutorService.getById(id);
    }

    @PutMapping("/{id}")
    public TutorResponseDTO update(@PathVariable Long id, @RequestBody @Valid TutorRequestDTO dto) {
        return tutorService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        tutorService.delete(id);
    }

    @GetMapping("/{id}/pets")
    public List<PetResponseDTO> getPetsByTutor(@PathVariable Long id) {
        return tutorService.getPetsByTutor(id);
    }
    @GetMapping("/search")
    public List<TutorResponseDTO> searchByName(@RequestParam String name) {
        return tutorService.searchByName(name);
    }

    @GetMapping("/email")
    public TutorResponseDTO findByEmail(@RequestParam String email) {
        return tutorService.findByEmail(email);
    }

    @GetMapping("/phone")
    public TutorResponseDTO findByPhone(@RequestParam String phone) {
        return tutorService.findByPhone(phone);
    }
}

