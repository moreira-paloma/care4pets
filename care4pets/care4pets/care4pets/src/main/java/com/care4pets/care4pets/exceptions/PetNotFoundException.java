package com.care4pets.care4pets.exceptions;

public class PetNotFoundException extends RuntimeException {

    public PetNotFoundException(Long id) {
        super("Pet com ID " + id + " não encontrado");
    }
}