package com.example.projetospring.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.projetospring.crud.models.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
