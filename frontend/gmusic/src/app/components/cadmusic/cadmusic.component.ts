import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/model/Music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-cadmusic',
  templateUrl: './cadmusic.component.html',
  styleUrls: ['./cadmusic.component.css']
})
export class CadmusicComponent implements OnInit {

  nome_musica:string = '';
  nome_artista:string = '';
  nome_genero:string = '';

  nome:boolean = false;
  artista:boolean = false;
  genero:boolean = false;

  cadastro!:boolean;

  music = new Music();

  musics:Music[] = [];

  constructor(private musicService:MusicService) {
    this.cadastro = false;
  }
  ngOnInit(): void {
    this.selecionar();
  }

  cancelar(){
    this.musicService.cadastrando = false;
  }


  onKey_musica(event:any, musica:string){
    this.nome_musica = musica;
    if(musica.length >= 3){
      this.nome = true;
    }
    else{
      this.nome = false;
    }
    this.ver_preen();
  }
  onKey_artista(event:any, artista:string){
    this.nome_artista = artista;
    if(artista.length >= 3){
      this.artista = true;
    }
    else{
      this.artista = false;
    }
    this.ver_preen();
  }
  onKey_genero(event:any, genero:string){
    this.nome_genero = genero;
    if(genero.length >= 3){
      this.genero = true;
    }
    else{
      this.genero = false;
    }
    this.ver_preen();
  }

  ver_preen(){
    if(this.nome && this.artista && this.genero){
      this.cadastro = true;
    }
    else{
      this.cadastro = false;
    }
  }


  cadastrar():void{
    if(this.cadastro){
      this.music.nm_autor = this.nome_artista;
      this.music.nm_musica = this.nome_musica;
      this.music.nm_genero = this.nome_genero;
  
      this.musicService.cadastrar(this.music).subscribe(retorno => {this.musics.push(retorno);});

      alert("Música cadastrada com sucesso!");

      this.selecionar();
  
      this.musicService.cadastrando = false;

    }
    else{
      alert("Insira as informações da música");
    }

  }

  selecionar():void{
    this.musicService.selecionar().subscribe(retorno => this.musics = retorno);
  }


}
