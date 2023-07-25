import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-tinogasta',
  templateUrl: './tinogasta.component.html',
  styleUrls: ['./tinogasta.component.scss'],
})
export class TinogastaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data: Item[] = [
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/16.jpg',
      imageAlt: '16',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/17.jpg',
      imageAlt: '17',
    },
    {
      imageSrc: '../../../assets/img/20-TINOGASTA/18.jpg',
      imageAlt: '18',
    },
  ];
}
