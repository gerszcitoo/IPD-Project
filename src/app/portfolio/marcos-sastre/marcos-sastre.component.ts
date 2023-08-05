import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-marcos-sastre',
  templateUrl: './marcos-sastre.component.html',
  styleUrls: ['../portfolio.style.scss'],
})
export class MarcosSastreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/2-MARCOS SASTRE/12.jpg',
      imageAlt: '12',
    },
  ];
}
