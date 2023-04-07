import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-french',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.scss'],
})
export class FrenchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data: Item[] = [
    {
      imageSrc: '../../../assets/img/16-FRENCH/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/16-FRENCH/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/16-FRENCH/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/16-FRENCH/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/16-FRENCH/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/16-FRENCH/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/16-FRENCH/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/16-FRENCH/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/16-FRENCH/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/16-FRENCH/10.jpg',
      imageAlt: '10',
    },
  ];
}
