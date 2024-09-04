import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'isDbApp';
  ngOnInit(): void {
        let username="joe";
        console.log(username);
  }

}
