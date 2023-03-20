import { Component } from '@angular/core';
import { MusicService } from './services/music.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public userService:UserService, public musicService:MusicService){}


  title = 'gmusic';


  logado:boolean = this.userService.logado;

  nickname:string = this.userService.nome;
}
