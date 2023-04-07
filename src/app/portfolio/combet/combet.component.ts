import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-combet',
  templateUrl: './combet.component.html',
  styleUrls: ['./combet.component.scss'],
})
export class CombetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/13-COMBET/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/13-COMBET/14.jpg',
      imageAlt: '14',
    },
  ];
}
