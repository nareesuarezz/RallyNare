package com.nareme.rally.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.nareme.rally.entity.models.Escuderias;
import com.nareme.rally.entity.services.IEscuderiasService;

@RestController
@CrossOrigin(origins = "*")
public class EscuderiasController {

    @Autowired
    IEscuderiasService escuderiasService;

    @GetMapping("/escuderias")
    public List<Escuderias> getAllEscuderias() {
        return escuderiasService.getAll();
    }

    @GetMapping("/escuderias/{id}")
    public Escuderias getOne(@PathVariable(value = "id") long id) {
        return escuderiasService.get(id);
    }

    @PostMapping("/escuderias")
    public void post(@ModelAttribute Escuderias escuderia) {
        escuderiasService.post(escuderia);
    }


    @PutMapping("/escuderias/{id}")
    public void put(@ModelAttribute Escuderias escuderia, @PathVariable(value = "id") long id) {
        escuderiasService.put(escuderia, id);
    }

    @DeleteMapping("/escuderias/{id}")
    public void delete(@PathVariable(value = "id") long id) {
        escuderiasService.delete(id);
    }
}
