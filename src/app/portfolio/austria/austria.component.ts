import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-austria',
  templateUrl: './austria.component.html',
  styleUrls: ['./austria.component.scss'],
})
export class AustriaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/AUS-00.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/AUS-00.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/AUS-00.jpg',
      imageAlt: '3',
    },
  ];
}
