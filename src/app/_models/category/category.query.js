import { createEntityQuery } from '@datorama/akita';
import { categoryStore } from './category.store';

export const categoryQuery = createEntityQuery(categoryStore);
