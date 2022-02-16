import { Component, OnInit } from '@angular/core';

declare var name: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
      new name();
  }
  title = 'IP Diseño';
}
