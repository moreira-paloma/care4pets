package com.care4pets.care4pets.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String species;
    private String breed;
    private Integer age;
    private Double weight;

    @ManyToOne
    @JoinColumn(name = "tutor_id")
    private Tutor tutor;
}