import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-las-heras',
  templateUrl: './las-heras.component.html',
  styleUrls: ['./las-heras.component.scss'],
})
export class LasHerasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data: Item[] = [
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/16.jpg',
      imageAlt: '16',
    },
    {
      imageSrc: '../../../assets/img/18-LAS HERAS/17.jpg',
      imageAlt: '17',
    },
  ];
}
