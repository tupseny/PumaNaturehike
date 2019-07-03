import {Component, OnInit} from '@angular/core';
import {SlideshowImage} from '../_models/slideshow-image';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  slides: Slide[];

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.wrap = true;
  }

  ngOnInit() {
    this.initSlides();
  }

  private initSlides() {
    const s1: Slide = {
      image: new SlideshowImage('assets/images/people-2561455-1920-1920x1280.jpg'),
      alt: 'slide 1',
      caption: 'Люди',
      text: 'тут изображены люди'
    };
    const s2: Slide = {
      image: new SlideshowImage('assets/images/tent-1208201-1920-1920x1280.jpg'),
      alt: 'второй слайд',
      caption: 'Палатки',
      text: 'тут изображены палатки'
    };
    const s3: Slide = {
      image: new SlideshowImage('assets/images/green-1072828-2000x1125.jpg'),
      alt: 'третий слайд',
      caption: 'Зелень',
      text: 'тут изображена зелень'
    };

    this.slides = [s1, s2, s3];
  }


}

export interface Slide {
  image: SlideshowImage;
  alt: string;
  caption: string;
  text: string;
}
