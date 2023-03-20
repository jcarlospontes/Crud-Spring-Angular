package br.com.projetomusicg.api.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "musics")
@Getter
@Setter
public class Music {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_musica;

    @Column(nullable = false)
    private String nm_musica;

    @Column(nullable = false)
    private String nm_autor;

    @Column(nullable = false)
    private String nm_genero;

    
}
