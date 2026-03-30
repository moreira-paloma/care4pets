package com.care4pets.care4pets.dto;

public record PetResponseDTO(
        Long id,
        String name,
        String species,
        String breed,
        Integer age,
        Double weight,
        Long tutorId,
        String tutorName
) {}