import {Component, OnInit} from '@angular/core';
import {SlideshowImage} from '../_models/slideshow-image';
import {IImage} from 'ng-simple-slideshow';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  showArrows: boolean;
  imageSources: (String | IImage)[];
  height: any;

  constructor() {
  }

  ngOnInit() {
    this.height = '600px';

    this.showArrows = true;

    const ex1: SlideshowImage = new SlideshowImage('assets/images/people-2561455-1920-1920x1280.jpg');
    const ex2: SlideshowImage = new SlideshowImage('assets/images/tent-1208201-1920-1920x1280.jpg');
    const ex3: SlideshowImage = new SlideshowImage('assets/images/green-1072828-2000x1125.jpg');
    this.imageSources = [ex1, ex2, ex3];
  }


}
