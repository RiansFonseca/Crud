package com.example.projetospring.crud.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projetospring.crud.models.Produto;
import com.example.projetospring.crud.models.ProdutoDto;
import com.example.projetospring.crud.repository.ProdutoRepository;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    @PostMapping("/cadastrar")
    public String cadastrar(@RequestBody ProdutoDto produtodto) {
        System.out.println(produtodto.toString());
        repository.save(new Produto(produtodto));
        return "Produto salvo";
    }  

    @GetMapping("/buscatodos")
    public List<Produto> listarProdutos() {
        System.out.println("Requisição para listar todos os Produtos.");
        return repository.findAll();
    }

    @DeleteMapping("/apagar/{id}")
    public String apagarProduto(@PathVariable Long id) {
        System.out.println("Requisição para apagar o Produto com ID: " + id);
        
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return "Produto removido com sucesso.";
        } else {
            return "Produto não encontrado.";
        }
    }

}
