import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ident',
  templateUrl: './ident.component.html',
  styleUrls: ['./ident.component.css']
})
export class IdentComponent {

  img:string;

constructor(public userService:UserService){
  switch(userService.foto){
    case 1:
      this.img = "assets/ic1.png";
      break;
    case 2:
      this.img = "assets/ic2.png";
      break;
    case 3:
      this.img = "assets/ic3.png";
      break;
    case 4:
      this.img = "assets/ic4.jpg";
      break;
    default:
      this.img = "";
}
}
}
