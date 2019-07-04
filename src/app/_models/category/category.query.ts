import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {Category} from '../category.model';
import {CategoryStore, State} from './category.store';

@Injectable({
  providedIn: 'root'
})
export class CategoryQuery extends QueryEntity<State, Category> {
  constructor(protected store: CategoryStore) {
    super(store);
  }
}
