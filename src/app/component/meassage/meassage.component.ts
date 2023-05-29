import { Component } from '@angular/core';

@Component({
  selector: 'app-meassage',
  templateUrl: './meassage.component.html',
  styleUrls: ['./meassage.component.css']
})
export class MeassageComponent {
public message:string="";

public updateMassege(msg:string):void{
  
   this.message=msg
}
}
