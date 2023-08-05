import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-barrio-agustinas',
  templateUrl: './barrio-agustinas.component.html',
  styleUrls: ['../portfolio.style.scss'],
})
export class BarrioAgustinasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/10-AGUSTINAS/15.jpg',
      imageAlt: '15',
    },
  ];
}
