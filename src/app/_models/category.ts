export class Category {
  private _photo_url;
  private _title;
  private _href;
  private _text;
  private _alt: String;

  constructor(photo_url, title, href, text: String = null, alt: String = '') {
    this._photo_url = photo_url;
    this._title = title;
    this._href = href;
    this._text = text;
    this._alt = alt;
  }


  get alt(): String {
    return this._alt;
  }

  get text() {
    return this._text;
  }

  set text(value) {
    this._text = value;
  }


  get photo_url() {
    return this._photo_url;
  }

  set photo_url(value) {
    this._photo_url = value;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get href() {
    return this._href;
  }

  set href(value) {
    this._href = value;
  }
}
