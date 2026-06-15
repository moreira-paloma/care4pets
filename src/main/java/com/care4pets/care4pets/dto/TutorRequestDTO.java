package com.care4pets.care4pets.dto;

import jakarta.validation.constraints.*;

public record TutorRequestDTO(

        @NotBlank(message = "O nome é obrigatório")
        @Size(min = 3, max = 100, message = "O nome deve ter entre 3 e 100 caracteres")
        String name,

        @NotBlank(message = "O telefone é obrigatório")
        @Pattern(
                regexp = "\\d{10,11}",
                message = "O telefone deve conter 10 ou 11 dígitos numéricos"
        )
        String phone,

        @Email(message = "Formato de e-mail inválido")
        @NotBlank(message = "O e-mail é obrigatório")
        String email
) {}