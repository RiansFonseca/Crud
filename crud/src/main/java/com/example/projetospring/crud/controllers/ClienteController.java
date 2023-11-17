package com.example.projetospring.crud.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projetospring.crud.models.Cliente;
import com.example.projetospring.crud.models.ClienteDto;
import com.example.projetospring.crud.repository.ClienteRepository;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "http://127.0.0.1:5500/crud/src/main/java/com/example/projetospring/crud/view/cliente/cliente.html")
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @PostMapping("/cadastrar")
    public String cadastrar(@RequestBody ClienteDto clientedto) {
        System.out.println("!!!!!!!!Requisição recebida no backend.");
        repository.save(new Cliente(clientedto));
        return "Cliente salvo";
    }  

    @GetMapping("/listar")
    public List<Cliente> listarClientes() {
        System.out.println("Requisição para listar todos os clientes.");
        return repository.findAll();
    }

    @DeleteMapping("/apagar/{id}")
    public String apagarCliente(@PathVariable Long id) {
        System.out.println("Requisição para apagar o cliente com ID: " + id);
        
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return "Cliente removido com sucesso.";
        } else {
            return "Cliente não encontrado.";
        }
    }

}
