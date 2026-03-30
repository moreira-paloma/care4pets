package com.care4pets.care4pets.dto;

import jakarta.validation.constraints.*;

public record TutorRequestDTO(

        @NotBlank(message = "Name is required")
        String name,

        @NotBlank(message = "Phone is required")
        String phone,

        @Email(message = "Invalid email format")
        @NotBlank(message = "Email is required")
        String email
) {}