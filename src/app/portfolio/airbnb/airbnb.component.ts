import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-airbnb',
  templateUrl: './airbnb.component.html',
  styleUrls: ['../portfolio.style.scss'],
})
export class AirbnbComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data: Item[] = [
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/16.jpg',
      imageAlt: '16',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/17.jpg',
      imageAlt: '17',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/18.jpg',
      imageAlt: '18',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/19.jpg',
      imageAlt: '19',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/20.jpg',
      imageAlt: '20',
    },
    {
      imageSrc: '../../../assets/img/17-AV. SAN MARTIN/21.jpg',
      imageAlt: '21',
    },
  ];
}
