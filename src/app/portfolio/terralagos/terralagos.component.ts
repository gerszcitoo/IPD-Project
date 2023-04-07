import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-terralagos',
  templateUrl: './terralagos.component.html',
  styleUrls: ['./terralagos.component.scss'],
})
export class TerralagosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/16.jpg',
      imageAlt: '16',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/17.jpg',
      imageAlt: '17',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/18.jpg',
      imageAlt: '18',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/19.jpg',
      imageAlt: '19',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/20.jpg',
      imageAlt: '20',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/21.jpg',
      imageAlt: '21',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/22.jpg',
      imageAlt: '22',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/23.jpg',
      imageAlt: '23',
    },
    {
      imageSrc: '../../../assets/img/7-TERRALAGOS/24.jpg',
      imageAlt: '24',
    },
  ];
}
