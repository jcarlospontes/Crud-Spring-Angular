package br.com.projetomusicg.api.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.projetomusicg.api.model.Music;

public interface Repository extends CrudRepository<Music, Long>{
    
}
