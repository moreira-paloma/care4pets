package com.care4pets.care4pets.model;

import jakarta.persistence.*;
import java.util.List;


@Entity
public class Tutor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phone;
    private String email;

    @OneToMany(mappedBy = "tutor")
    private List<Pet> pets;



    public Tutor(String name, String phone, String email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    public Tutor() {

    }

    // getters e setters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Pet> getPets() {
        return pets;
    }
}

