package com.care4pets.care4pets.controller;

import com.care4pets.care4pets.model.Pet;
import com.care4pets.care4pets.model.Tutor;
import com.care4pets.care4pets.service.TutorService;
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
    public Tutor create(@RequestBody Tutor tutor) {
        return tutorService.create(tutor);
    }

    @GetMapping
    public List<Tutor> list() {
        return tutorService.list();
    }

    @GetMapping("/{id}")
    public Tutor getById(@PathVariable Long id) {
        return tutorService.getById(id);
    }

    @PutMapping("/{id}")
    public Tutor update(@PathVariable Long id, @RequestBody Tutor tutor) {
        return tutorService.update(id, tutor);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        tutorService.delete(id);
    }

    @GetMapping("/{id}/pets")
    public List<Pet> getPetsByTutor(@PathVariable Long id) {
        Tutor tutor = tutorService.getById(id);
        return tutor.getPets();
    }
}