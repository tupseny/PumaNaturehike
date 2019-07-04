import {Category, createCategory} from '../_models/category.model';

export class Backend {
  static categories = [
    createCategory({title: 'Палатки', photo_url: 'assets/img/cat_tent.jpg'}),
    createCategory({title: 'Спальники', photo_url: 'assets/img/cat_sleepbag.png'}),
    createCategory({title: 'Рюкзаки', photo_url: 'assets/img/cat_bag.jpg'}),
    createCategory({title: 'Пенки', photo_url: 'assets/img/cat_sleeppad.jpg'}),
  ];
}
