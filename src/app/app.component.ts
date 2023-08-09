import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showLoader: boolean = true;

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    const images = document.querySelectorAll('img');
    const totalImages = images.length;
    let loadedImages = 0;

    const imageLoaded = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        this.showLoader = false;
      }
    };

    images.forEach((image: HTMLImageElement) => {
      if (image.complete) {
        imageLoaded();
      } else {
        image.addEventListener('load', imageLoaded);
      }
    });
  }

  title = 'Estudio IP';
}
