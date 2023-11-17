package com.example.projetospring.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.projetospring.crud.models.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{

}

