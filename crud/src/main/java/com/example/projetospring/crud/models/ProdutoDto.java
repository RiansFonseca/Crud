package com.example.projetospring.crud.models;

import java.math.BigDecimal;
import java.time.LocalDate;

public record ProdutoDto(
	Long id,
	String nome,
    BigDecimal preco,
	LocalDate validade
) {}