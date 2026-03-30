package com.care4pets.care4pets.controller;

import com.care4pets.care4pets.dto.PetRequestDTO;
import com.care4pets.care4pets.dto.PetResponseDTO;
import com.care4pets.care4pets.service.PetService;
import jakarta.validation.Valid;
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
    public PetResponseDTO create(@RequestBody @Valid PetRequestDTO dto) {
        return petService.create(dto);
    }

    @GetMapping
    public List<PetResponseDTO> list() {
        return petService.list();
    }

    @GetMapping("/{id}")
    public PetResponseDTO getById(@PathVariable Long id) {
        return petService.getById(id);
    }

    @PutMapping("/{id}")
    public PetResponseDTO update(@PathVariable Long id, @RequestBody @Valid PetRequestDTO dto) {
        return petService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        petService.delete(id);
    }
}