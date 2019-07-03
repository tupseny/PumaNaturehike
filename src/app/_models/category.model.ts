import {ID} from '@datorama/akita';

export interface Category {
  id: ID;
  title: string;
  href: string;
  text: string;
  photo_url: string;
  photo_alt: string;
}

export function createCategory({id, title, href, photo_alt, photo_url, text}: Partial<Category>) {
  return {
    id,
    title,
    href,
    text,
    photo_url,
    photo_alt
  } as Category;
}
