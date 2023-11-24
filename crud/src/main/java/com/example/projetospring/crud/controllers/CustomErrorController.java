package com.example.projetospring.crud.controllers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CustomErrorController implements ErrorController {

    @RequestMapping("/error")
    public String handleError() {
        // lógica para lidar com erros e redirecionar para a página de erro personalizada
        return "error"; // substitua "error" pelo nome da sua página de erro personalizada
    }

    public String getErrorPath() {
        return "/error";
    }
}
