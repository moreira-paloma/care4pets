package com.care4pets.care4pets.dto;

import jakarta.validation.constraints.*;

    public record PetRequestDTO(

            @NotBlank(message = "Name is required")
            String name,

            @NotBlank(message = "Species is required")
            String species,

            @NotBlank(message = "Breed is required")
            String breed,

            @NotNull(message = "Age is required")
            @Min(value = 0, message = "Age cannot be negative")
            Integer age,

            @NotNull(message = "Weight is required")
            @Positive(message = "Weight must be positive")
            Double weight,

            @NotNull(message = "Tutor ID is required")
            Long tutorId
    ) {}
