import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {SlideshowComponent} from './slideshow/slideshow.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MainComponent} from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    NavbarComponent,
    MainComponent,
    CategoriesComponent,
    CategoryCardComponent,
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
