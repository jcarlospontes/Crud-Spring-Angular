import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/model/Music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-selmusic',
  templateUrl: './selmusic.component.html',
  styleUrls: ['./selmusic.component.css']
})
export class SelmusicComponent implements OnInit{

  nome_musica:string = this.musicService.music.Musica;
  nome_artista:string = this.musicService.music.Autor;
  nome_genero:string = this.musicService.music.Genero;

  nome:boolean = true;
  artista:boolean = true;
  genero:boolean = true;

  validado:boolean = true;


  musicas:Music[] = [];

  music = new Music();

    
  constructor(public musicService:MusicService) {}


  ngOnInit(): void {
    this.selecionar();
    this.music = this.musicas[this.musicService.indexmusica];
  }

  infoMusic(){
    this.selecionar();
    this.music = this.musicas[this.musicService.indexmusica];
  }

  selecionar():void{
    this.musicService.selecionar().subscribe(retorno => this.musicas = retorno);
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
      this.validado = true;
    }
    else{
      this.validado = false;
    }
  }

  remover():void{

    if(confirm("Deseja mesmo deletar a música?")) {

      this.selecionar();
      this.music = this.musicService.music;
      this.musicService.remover(this.music.ID).subscribe(retorno => {
        
        let posicao = this.musicas.findIndex(obj => {
          return obj.ID == this.music.ID;
        });

        this.musicas.splice(posicao, 1);

        this.music = new Music();

        this.selecionar();

        alert("Música deletada com sucesso!");
        this.musicService.selecionando = false;

      });
  }
}


  editar():void{
    this.selecionar();
    this.music = this.musicService.music;
    this.music.Musica = this.nome_musica;
    this.music.Autor = this.nome_artista;
    this.music.Genero = this.nome_genero;
    this.musicService.editar(this.music).subscribe(retorno => {
      let index = this.musicas.findIndex(obj => {
        return obj.ID == retorno.ID;
      });

      this.musicas[index] = retorno;

      console.log(index);

      alert("Editado com sucesso!");

      this.musicService.selecionando = false;

    });
  }

}
