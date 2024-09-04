import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {
 
  imagePath!:string;
  
  get getImagePath(){
    this.imagePath="assets/logo.jpg";  
    return this.imagePath;
  }

}
