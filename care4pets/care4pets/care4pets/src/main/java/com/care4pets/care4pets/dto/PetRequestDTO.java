package com.care4pets.care4pets.dto;

import jakarta.validation.constraints.*;

public record PetRequestDTO(

        @NotBlank(message = "O nome é obrigatório")
        String name,

        @NotBlank(message = "A espécie é obrigatória")
        String species,

        @NotBlank(message = "A raça é obrigatória")
        String breed,

        @NotNull(message = "A idade é obrigatória")
        @Min(value = 0, message = "A idade não pode ser negativa")
        Integer age,

        @NotNull(message = "O peso é obrigatório")
        @Positive(message = "O peso deve ser maior que zero")
        Double weight,

        @NotNull(message = "O ID do tutor é obrigatório")
        Long tutorId
) {}