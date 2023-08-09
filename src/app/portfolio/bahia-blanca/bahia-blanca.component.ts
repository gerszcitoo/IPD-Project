import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-bahia-blanca',
  templateUrl: './bahia-blanca.component.html',
  styleUrls: ['../portfolio.style.scss'],
})
export class BahiaBlancaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/16.jpg',
      imageAlt: '16',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/17.jpg',
      imageAlt: '17',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/18.jpg',
      imageAlt: '18',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/19.jpg',
      imageAlt: '19',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/20.jpg',
      imageAlt: '20',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/21.jpg',
      imageAlt: '21',
    },
    {
      imageSrc: '../../../assets/img/11-BAHIA BLANCA/22.jpg',
      imageAlt: '22',
    },
  ];
}
