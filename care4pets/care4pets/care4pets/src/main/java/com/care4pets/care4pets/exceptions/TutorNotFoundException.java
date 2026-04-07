package com.care4pets.care4pets.exceptions;

public class TutorNotFoundException extends RuntimeException {

    public TutorNotFoundException(Long id) {
        super("Tutor com ID " + id + " não encontrado");
    }
}