package com.care4pets.care4pets.controller;

import com.care4pets.care4pets.model.Pet;
import com.care4pets.care4pets.service.PetService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pets")
public class PetController {

    private final PetService petService;

    public PetController(PetService petService) {
        this.petService = petService;
    }

    @PostMapping
    public Pet create(@RequestBody Pet pet) {
        return petService.create(pet);
    }

    @GetMapping
    public List<Pet> list() {
        return petService.list();
    }

    @GetMapping("/{id}")
    public Pet getById(@PathVariable Long id) {
        return petService.getById(id);
    }

    @PutMapping("/{id}")
    public Pet update(@PathVariable Long id, @RequestBody Pet pet) {
        return petService.update(id, pet);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        petService.delete(id);
    }
}