package com.example.projetospring.crud.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/clientePage")
    public String clientePage() {
        return "cliente"; 
    }

    @GetMapping("/produtoPage")
    public String produtoPage() {
        return "produto"; 
    }
}