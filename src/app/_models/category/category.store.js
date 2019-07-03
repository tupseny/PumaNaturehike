import {EntityState, EntityStore} from '@datorama/akita';
import {Injectable} from "@angular/core";

import {Category} from "../category.model";

export interface State

@Injectable({
  providedIn: 'root'
})
export class CategoryStore extends EntityStore<State>

