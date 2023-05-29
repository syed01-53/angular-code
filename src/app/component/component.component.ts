import { Component } from '@angular/core';
import { timeInterval, timer } from 'rxjs';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {

  public visted:string="Paris";
  public pic:string='https://images.pexels.com/photos/3073666/pexels-photo-3073666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  public time:string=new Date().toTimeString();
  constructor(){
    this.updateTime();
  }
  public getDate():string{
    return new Date().toLocaleDateString();
  }

  public updateTime():void{
    setInterval( ()=>{
      this. time=new Date().toTimeString()
    },1000)  
  }

  public counter:number=0;
  public Increment():void{
  this.counter=this.counter+1;
  }
  public Decrement():void{
    this.counter=this.counter-1;
    }
}


