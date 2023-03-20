import { Component } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserService){}

  name:string = '';
  foto:number=0;
  btnStyle:string = 'btDes';
  antigo!:HTMLButtonElement;
  desabilita:boolean = true;
  cadastrado:boolean = false;

  onKey(event:any, nome:string){
    this.name = nome;
    if(nome.length >= 3 && this.foto != 0){
      this.desabilita = false;
    }
  }

  selFoto(num:number, botao:HTMLButtonElement){
    this.foto = num;
    botao.style.border ='5px solid yellow';
    if(this.antigo == botao || this.antigo == null){
      this.antigo = botao;
    }
    else{
      this.antigo.style.border = '5px solid transparent';
      this.antigo = botao;
    }
  }

  login(val:string):void{
    this.name = val;
    this.userService.cadastraUser(this.name, this.foto);
  }


}
