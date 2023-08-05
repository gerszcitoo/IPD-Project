import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-arenales',
  templateUrl: './arenales.component.html',
  styleUrls: ['../portfolio.style.scss'],
})
export class ArenalesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/5-ARENALES/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/16.jpg',
      imageAlt: '16',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/17.jpg',
      imageAlt: '17',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/18.jpg',
      imageAlt: '18',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/19.jpg',
      imageAlt: '19',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/20.jpg',
      imageAlt: '20',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/21.jpg',
      imageAlt: '21',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/22.jpg',
      imageAlt: '22',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/23.jpg',
      imageAlt: '23',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/24.jpg',
      imageAlt: '24',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/25.jpg',
      imageAlt: '25',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/26.jpg',
      imageAlt: '26',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/27.jpg',
      imageAlt: '27',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/28.jpg',
      imageAlt: '28',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/29.jpg',
      imageAlt: '29',
    },
    {
      imageSrc: '../../../assets/img/5-ARENALES/30.jpg',
      imageAlt: '30',
    },
  ];
}
