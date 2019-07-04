import {Component, OnInit} from '@angular/core';
import {Category} from '../_models/category.model';
import {CategoryQuery, CategoryService} from '../_models/category';
import {Observable} from 'rxjs';
import {HashMap} from '@datorama/akita';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<Category[]>;

  section1Title: String;
  section1Text: String;
  section1CategoriesRows: Category[][];

  private readonly MAX_COLS = 12;

  private _rowCount = 0;
  private _elInRow = 3;
  private _lastRowEls = 0;
  private _colsForEls = this.MAX_COLS;
  private _colsForLastEl = this.MAX_COLS;

  constructor(private categoryService: CategoryService,
              private categoryQuery: CategoryQuery) {
  }

  ngOnInit() {
    this.section1Title = 'Категории товаров';
    this.section1Text = 'Naturehike является брендом профессиональной продукции для использования на открытом воздухе и не только.' +
      ' Компания предлагает легкую, высококачественную экипировку...';
    this.categories$ = this.categoryQuery.selectAll();
    this.categories$.subscribe(elms => {
      if (elms.length === 0) {
        console.log('--> Empty categories <--');
      } else {
        console.log('--> Got new elements <--');
        console.log(elms);
        this.calcMeta(elms.length);
        this.splitIntoRows(elms);
      }
    });
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories();
  }

  splitIntoRows(elms: Category[]) {
    this.section1CategoriesRows = [];

    let row = 0;
    let col = 0;
    this.section1CategoriesRows[row] = [];
    for (let i = 0; i < elms.length; i++) {
      if (col === 2) {
        row++;
        this.section1CategoriesRows[row] = [];
      }

      col = i % 3;
      this.section1CategoriesRows[row][col] = elms[i];
    }

    console.log(this.section1CategoriesRows);
  }

  calcMeta(count: number) {
    if (
      count === 0 ||
      this.elInRow === 0
    ) {
      return;
    }

    this._rowCount = Number((count / this._elInRow).toFixed(1).split('.')[0]);
    this._colsForEls = this.MAX_COLS / this._elInRow;

    const reminded = count % this._elInRow;
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
