import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-valdevez',
  templateUrl: './valdevez.component.html',
  styleUrls: ['./valdevez.component.scss'],
})
export class ValdevezComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/16.jpg',
      imageAlt: '16',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/17.jpg',
      imageAlt: '17',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/18.jpg',
      imageAlt: '18',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/19.jpg',
      imageAlt: '19',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/20.jpg',
      imageAlt: '20',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/21.jpg',
      imageAlt: '21',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/22.jpg',
      imageAlt: '22',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/23.jpg',
      imageAlt: '23',
    },
    {
      imageSrc: '../../../assets/img/12-VALDEVEZ/24.jpg',
      imageAlt: '24',
    },
  ];
}
