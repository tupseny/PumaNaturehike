import {Injectable} from '@angular/core';
import {CategoryStore} from './category.store';
import {Category, createCategory} from '../category.model';
import {Backend} from '../../backend/temp.backend';
import {timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private categoryStore: CategoryStore) {
  }

  getCategories() {
    timer(100)
      .pipe(mapTo(Backend.categories))
      .subscribe(elms => {
        console.log('Got categories');
        console.log(elms);
        this.categoryStore.set(elms);
      });
  }

  add(title: string, photo_url: string, text: string = '', href = '#', photo_alt = 'photo') {
    const category: Category = createCategory({
      id: Math.random(),
      photo_alt: photo_alt,
      photo_url: photo_url,
      text: text,
      href: href,
      title: title
    });

    this.categoryStore.add(category);
  }
}
