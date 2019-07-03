export class Backend {
  private _categories: Category[];
  private _prods: Product[];

  constructor() {
    const tentCat = new Category('Палатки', 'tent');
    const sleepBagCat = new Category('Спальники', 'sleep_bag');
    const matCat = new Category('Пенки', 'mat');

    this._categories = [tentCat, sleepBagCat, matCat];

    this._prods = [
      new Product('Палатка 1', 100,
        [new ProductOption('Цвет', 'color', 'black')], [tentCat.tag])
    ];
  }

  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }

  get prods(): Product[] {
    return this._prods;
  }

  set prods(value: Product[]) {
    this._prods = value;
  }
}

export class Cart {
  private _items: CartProduct[];

  constructor() {
  }

  appendToCart(item: Product, count?: number) {
    this._items.push(new CartProduct(item, count));
  }

  get items(): CartProduct[] {
    return this._items;
  }

  set items(value: CartProduct[]) {
    this._items = value;
  }
}

class CartProduct {
  private readonly _item: Product;
  private _count: number;

  constructor(item: Product, count?: number) {
    this._item = item;

    if (count === undefined) {
      this._count = 1;
    } else {
      this._count = count;
    }
  }

  get item(): Product {
    return this._item;
  }

  get count(): number {
    return this._count;
  }


  set count(value: number) {
    this._count = value;
  }
}

class Category {
  private readonly _name: string;
  private readonly _tag: string;

  constructor(name, tag) {
    this._name = name;
    this._tag = tag;
  }

  get tag(): string {
    return this._tag;
  }

  get name() {
    return this._name;
  }
}

class Product {
  private readonly _name: string;
  private _price: number;
  private _options: ProductOption[];
  private _categoryTags: string[];

  constructor(name: string, price: number, options: ProductOption[], categoryTags: string[]) {
    this._name = name;
    this._price = price;
    this._options = options;
    this._categoryTags = categoryTags;
  }

  removeCategoryTag(item: string) {
    const i = this._categoryTags.indexOf(item);
    if (i > -1) {
      this._categoryTags.splice(i, 1);
    }
  }

  appendCategoryTag(item: string): number {
    return this._categoryTags.push(item);
  }

  get categoryTags(): string[] {
    return this._categoryTags;
  }

  set categoryTags(value: string[]) {
    this._categoryTags = value;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get options(): ProductOption[] {
    return this._options;
  }

  set options(value: ProductOption[]) {
    this._options = value;
  }
}

class ProductOption {
  private readonly _name: string;
  private readonly _tag: string;
  private _value: string;

  constructor(name: string, tag: string, value: string) {
    this._name = name;
    this._tag = tag;
    this._value = value;
  }


  get name(): string {
    return this._name;
  }

  get tag(): string {
    return this._tag;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
