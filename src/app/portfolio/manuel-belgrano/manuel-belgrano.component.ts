import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-manuel-belgrano',
  templateUrl: './manuel-belgrano.component.html',
  styleUrls: ['./manuel-belgrano.component.scss'],
})
export class ManuelBelgranoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/15-M. BELGRANO/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/15-M. BELGRANO/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/15-M. BELGRANO/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/15-M. BELGRANO/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/15-M. BELGRANO/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/15-M. BELGRANO/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/15-M. BELGRANO/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/15-M. BELGRANO/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/15-M. BELGRANO/9.jpg',
      imageAlt: '9',
    },
  ];
}
