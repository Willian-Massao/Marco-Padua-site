import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ola mundo!';
  color = "aliceblue"
  fontcolor = "black"
  buttoncolor = "rgb(44 ,44 ,44 )"
  buttonfontcolor = "gray"
  hover=false
  Bdarktheme="Dark Theme"
  toggle(){
    if (this.color == "aliceblue"){
      this.color = "rgb(44 ,44 ,44 )"
      this.fontcolor = "gray"
      this.buttoncolor = "aliceblue"
      this.buttonfontcolor = "black"
      this.Bdarktheme="White Theme"
    }else{
      this.color = "aliceblue"
      this.fontcolor = "black"
      this.buttoncolor = "rgb(44 ,44 ,44 )"
      this.buttonfontcolor = "gray"
      this.Bdarktheme="Dark Theme"
    }
  }
}
