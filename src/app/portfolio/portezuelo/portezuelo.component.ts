import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-portezuelo',
  templateUrl: './portezuelo.component.html',
  styleUrls: ['./portezuelo.component.scss'],
})
export class PortezueloComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/16.jpg',
      imageAlt: '16',
    },
    {
      imageSrc: '../../../assets/img/8-PORTEZUELO/17.jpg',
      imageAlt: '17',
    },
  ];
}
