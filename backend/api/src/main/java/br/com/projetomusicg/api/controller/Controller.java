package br.com.projetomusicg.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetomusicg.api.model.Music;
import br.com.projetomusicg.api.repository.Repository;

@RestController
@CrossOrigin(origins = "*")
public class Controller {

    @Autowired
    private Repository acao;

    @PostMapping("/")
    public Music cadastrar(@RequestBody Music m){
        return acao.save(m);
    }

    @GetMapping("/")
    public Iterable<Music> selecionar(){
        return acao.findAll();
    }

    @PutMapping("/")
    public Music editar(@RequestBody Music m){
        return acao.save(m);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Long id){
        acao.deleteById(id);
    }
    
}
