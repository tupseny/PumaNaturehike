import {IImage} from 'ng-simple-slideshow';

export class SlideshowImage implements IImage {
  private _backgroundPosition: string;
  private _backgroundRepeat: string;
  private _backgroundSize: string;
  private _caption: string;
  private _clickAction: Function;
  private _href: string;
  private _title: string;
  private _url: string | null;


  constructor(url: string | null) {
    this._url = url;
  }

  get backgroundPosition(): string {
    return this._backgroundPosition;
  }

  set backgroundPosition(value: string) {
    this._backgroundPosition = value;
  }

  get backgroundRepeat(): string {
    return this._backgroundRepeat;
  }

  set backgroundRepeat(value: string) {
    this._backgroundRepeat = value;
  }

  get backgroundSize(): string {
    return this._backgroundSize;
  }

  set backgroundSize(value: string) {
    this._backgroundSize = value;
  }

  get caption(): string {
    return this._caption;
  }

  set caption(value: string) {
    this._caption = value;
  }

  get clickAction(): Function {
    return this._clickAction;
  }

  set clickAction(value: Function) {
    this._clickAction = value;
  }

  get href(): string {
    return this._href;
  }

  set href(value: string) {
    this._href = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get url(): string | null {
    return this._url;
  }

  set url(value: string | null) {
    this._url = value;
  }
}
