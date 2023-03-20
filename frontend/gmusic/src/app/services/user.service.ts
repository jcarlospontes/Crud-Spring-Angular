import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logado!:boolean;

  nome!:string;

  foto!:number;

  cadastraUser(nome:string, foto:number){
    this.nome = nome;
    this.foto = foto;
    this.logado = true;
  }

  constructor() {
    this.logado = false;
    this.nome = '';
    this.foto = 0;
  }

}
