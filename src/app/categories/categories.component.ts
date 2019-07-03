import {Component, OnInit} from '@angular/core';
import {Category} from '../_models/category.model';
import {isUndefined} from 'util';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  section1Title: String;
  section1Text: String;
  section1Categories: Category[];
  section1CategoriesRows: Category[][];

  private readonly MAX_COLS = 12;
  private readonly CATEGORY_HEIGTH = '200px';

  private _rowCount = 0;
  private _elInRow = 3;
  private _lastRowEls = 0;
  private _colsForEls = this.MAX_COLS;
  private _colsForLastEl = this.MAX_COLS;

  constructor() {
  }

  ngOnInit() {
    this.section1Title = 'Категории товаров';
    this.section1Text = 'Naturehike является брендом профессиональной продукции для использования на открытом воздухе и не только.' +
      ' Компания предлагает легкую, высококачественную экипировку...';

    this.section1Categories = [
      new Category('assets/img/cat_tent.jpg', 'Палатки', '#', 'Down Sleeping Bags, Cotton Sleeping Bags, Sleeping Bag Inner'),
      new Category('assets/img/cat_tent.jpg', '2', '#', 'asdkjasd aksjdnajksd askdjn'),
      new Category('assets/img/cat_tent.jpg', '3', '#', 'asdkjasd aksjdnajksd askdjn'),
      new Category('assets/img/cat_tent.jpg', '4', '#', 'asdkjasd aksjdnajksd askdjn'),
      new Category('assets/img/cat_tent.jpg', '5', '#', 'asdkjasd aksjdnajksd askdjn'),
      new Category('assets/img/cat_tent.jpg', '5', '#', 'asdkjasd aksjdnajksd askdjn'),
      new Category('assets/img/cat_tent.jpg', '5', '#', 'asdkjasd aksjdnajksd askdjn'),
    ];

    this.calcMeta();
    this.splitIntoRows();
  }

  splitIntoRows() {
    this.section1CategoriesRows = [];

    let row = 0;
    let col = 0;
    this.section1CategoriesRows[row] = [];
    for (let i = 0; i < this.section1Categories.length; i++) {
      if (col === 2) {
        row++;
        this.section1CategoriesRows[row] = [];
      }

      col = i % 3;
      this.section1CategoriesRows[row][col] = this.section1Categories[i];
    }

    console.log(this.section1CategoriesRows);
  }

  calcMeta() {
    if (
      isUndefined(this.section1Categories) ||
      this.section1Categories.length === 0 ||
      this.elInRow === 0
    ) {
      return;
    }

    this._rowCount = Number((this.section1Categories.length / this._elInRow).toFixed(1).split('.')[0]);
    this._colsForEls = this.MAX_COLS / this._elInRow;

    const reminded = this.section1Categories.length % this._elInRow;
    if (reminded === 0) {
      this._lastRowEls = this._elInRow;
      this._colsForLastEl = this._colsForEls;
    } else {
      this._lastRowEls = reminded;
      this._colsForLastEl = this.MAX_COLS / this._lastRowEls;
    }

    console.log('rowCount: ' + this.rowCount);
    console.log('elInRow: ' + this.elInRow);
    console.log('lastRowEls: ' + this.lastRowEls);
    console.log('colsForEls: ' + this.colsForEls);
    console.log('colsForLastEl: ' + this.colsForLastEl);
  }


  get rowCount(): number {
    return this._rowCount;
  }

  get elInRow(): number {
    return this._elInRow;
  }

  get lastRowEls(): number {
    return this._lastRowEls;
  }

  get colsForEls(): number {
    return this._colsForEls;
  }

  get colsForLastEl(): number {
    return this._colsForLastEl;
  }
}
