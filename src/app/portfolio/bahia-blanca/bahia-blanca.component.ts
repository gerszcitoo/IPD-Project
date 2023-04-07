import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-bahia-blanca',
  templateUrl: './bahia-blanca.component.html',
  styleUrls: ['./bahia-blanca.component.scss'],
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
  ];
}
