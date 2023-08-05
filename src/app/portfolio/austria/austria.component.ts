import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-austria',
  templateUrl: './austria.component.html',
  styleUrls: ['../portfolio.style.scss'],
})
export class AustriaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/16.jpg',
      imageAlt: '16',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/17.jpg',
      imageAlt: '17',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/18.jpg',
      imageAlt: '18',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/19.jpg',
      imageAlt: '19',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/20.jpg',
      imageAlt: '20',
    },
    {
      imageSrc: '../../../assets/img/6-AUSTRIA/21.jpg',
      imageAlt: '21',
    },
  ];
}
