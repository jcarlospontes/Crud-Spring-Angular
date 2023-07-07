import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Music } from '../model/Music';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  public music = new Music();

  musicas:Music[] = [];

  public indexmusica:number = 0;

  private url:string = 'http://api-container:80';

  public selecionando:boolean = false;

  public cadastrando:boolean = false;

  constructor(private http:HttpClient) { }

  editar(obj:Music):Observable<Music>{
    return this.http.put<Music>(this.url,obj);
  }

  selecionar():Observable<Music[]>{
    return this.http.get<Music[]>(this.url);
  }

  cadastrar(obj:Music):Observable<Music>{
    return this.http.post<Music>(this.url, obj);
  }

  remover(ID:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + ID);
  }


  getcod():number{
    return this.music.ID;
  }
}
