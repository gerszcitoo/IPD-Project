import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-lopez-delgado',
  templateUrl: './lopez-delgado.component.html',
  styleUrls: ['./lopez-delgado.component.scss'],
})
export class LopezDelgadoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: Item[] = [
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/1.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/2.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/3.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/4.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/5.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/6.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/7.jpg',
      imageAlt: '7',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/8.jpg',
      imageAlt: '8',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/9.jpg',
      imageAlt: '9',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/10.jpg',
      imageAlt: '10',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/11.jpg',
      imageAlt: '11',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/12.jpg',
      imageAlt: '12',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/13.jpg',
      imageAlt: '13',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/14.jpg',
      imageAlt: '14',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/15.jpg',
      imageAlt: '15',
    },
    {
      imageSrc: '../../../assets/img/4-LOPEZ DELGADO/16.jpg',
      imageAlt: '16',
    },
  ];
}
