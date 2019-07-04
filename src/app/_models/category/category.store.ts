import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Injectable} from '@angular/core';

import {Category, createCategory} from '../category.model';

export interface State extends EntityState<Category> {
}

export function createInitialState(): Category {
  return {
    photo_url: '',
    title: null,
    href: '#',
    text: null,
    photo_alt: '',
    id: null
  };
}

@StoreConfig({name: 'category'})
@Injectable({
  providedIn: 'root'
})
export class CategoryStore extends EntityStore<State, Category> {
  constructor() {
    super(createInitialState());
  }
}

