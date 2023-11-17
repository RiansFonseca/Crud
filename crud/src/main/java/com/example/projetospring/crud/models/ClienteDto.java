package com.example.projetospring.crud.models;

public record ClienteDto(
        Long id,
        String nome,
        String email,
        int idade
) {}