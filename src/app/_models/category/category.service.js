import { categoryStore } from './category.store';

export async function update(id, data) {
  await Promise.resolve();
  categoryStore.update(id, data);
}

export async function remove(id) {
  await Promise.resolve();
  categoryStore.remove(id);
}
