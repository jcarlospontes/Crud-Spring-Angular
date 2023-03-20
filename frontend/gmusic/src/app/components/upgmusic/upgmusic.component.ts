import { Component } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-upgmusic',
  templateUrl: './upgmusic.component.html',
  styleUrls: ['./upgmusic.component.css']
})
export class UpgmusicComponent {

  constructor(public userService:UserService, public musicService:MusicService){}

  quit(){
    if(confirm("Deseja mesmo sair?")) {
      this.userService.logado =false;
    }
  }

  cadastrar(){
    this.musicService.cadastrando = true;
  }

}
