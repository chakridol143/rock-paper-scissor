import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rock-Paper-Scissor';
  result:string =""
  abc:string="";
  computer:string="Let's Play"
  CpuScore:number=0;
  UserScore:number=0;
  num:number=0
  Restart(){
    window.location.reload();
  }

  myfun(user:any){
    this.abc="Computer has selected - "
  let s:number = Math.random()
  if(s >=0.0 && s<=0.33){
    this.computer='Rock'
    }
  else if(s >=0.68 && s<=1.0){
      this.computer='Scissor'
     }
  else if(s >=0.34 && s<=0.67){
        this.computer='Paper'
    }
    if(user==this.computer){
      this.result="Match drawn."
    }
  else if(user=="Rock" && this.computer=="Paper"){
    this.result="Computer has Won"
    this.CpuScore +=1
    
  }
  else if(user=="Rock" && this.computer=="Scissor"){
    this.result="You have Won";
    this.UserScore +=1
  }else if(user=="Paper" && this.computer=="Rock"){
    this.result="You have Won"
    this.UserScore +=1
  }else if(user=="Paper" && this.computer=="Scissor"){
    this.result="Computer has Won"
    this.CpuScore +=1
  }else if(user=="Scissor" && this.computer=="Paper"){
    this.result="You have Won"
    this.UserScore +=1
  }else if(user=="Scissor" && this.computer=="Rock"){
    this.result="Computer has Won"
    this.CpuScore +=1
  }

  }
}
