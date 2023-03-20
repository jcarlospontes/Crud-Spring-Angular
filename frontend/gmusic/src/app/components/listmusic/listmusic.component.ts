import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/model/Music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-listmusic',
  templateUrl: './listmusic.component.html',
  styleUrls: ['./listmusic.component.css']
})
export class ListmusicComponent implements OnInit {
  musics:Music[] = [];
  music = new Music();

  constructor(private musicService:MusicService){}

  selecionar():void{
    this.musicService.selecionar().subscribe(retorno => this.musics = retorno);
  }

  ngOnInit(): void {
    this.selecionar();
  }

  editar(idmusic:number){
    this.selecionar();
    this.musicService.music = this.musics[idmusic];
    this.musicService.selecionando = true;
  }
  
}
