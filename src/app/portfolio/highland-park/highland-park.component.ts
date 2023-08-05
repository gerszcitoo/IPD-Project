import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-highland-park',
  templateUrl: './highland-park.component.html',
  styleUrls: ['../portfolio.style.scss'],
})
export class HighlandParkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data: Item[] = [
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/16.jpg',
      imageAlt: '16',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/17.jpg',
      imageAlt: '17',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/18.jpg',
      imageAlt: '18',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/19.jpg',
      imageAlt: '19',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/20.jpg',
      imageAlt: '20',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/21.jpg',
      imageAlt: '21',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/22.jpg',
      imageAlt: '22',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/23.jpg',
      imageAlt: '23',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/24.jpg',
      imageAlt: '24',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/25.jpg',
      imageAlt: '25',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/26.jpg',
      imageAlt: '26',
    },
    {
      imageSrc: '../../../assets/img/9-HIGLAND PARK/27.jpg',
      imageAlt: '27',
    },
  ];
}
