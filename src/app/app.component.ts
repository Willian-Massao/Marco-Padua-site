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
  normal="-100%"
  normal_zIndex="-1"
  normal_opacity="0%"

  apper(){
    if (this.normal === "-100%"){
      this.normal="0%"
      this.normal_zIndex="4"
      this.normal_opacity="40%"
    }else{
      this.normal="-100%"
      this.normal_zIndex="0"
      this.normal_opacity="0%"
    }
    }
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
