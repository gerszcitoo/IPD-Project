import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-ecuador',
  templateUrl: './ecuador.component.html',
  styleUrls: ['../portfolio.style.scss'],
})
export class EcuadorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/14-ECUADOR/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/16.jpg',
      imageAlt: '16',
    },
    {
      imageSrc: '../../../assets/img/14-ECUADOR/17.jpg',
      imageAlt: '17',
    },
  ];
}
