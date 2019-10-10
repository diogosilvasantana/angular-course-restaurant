import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'

import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantService } from './restaurants/services/restaurants.service';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { RestaurantMenuComponent } from './restaurants/restaurant-detail/restaurant-menu/restaurant-menu.component';
import { RestaurantShoppingCartComponent } from './restaurants/restaurant-detail/restaurant-shopping-cart/restaurant-shopping-cart.component';
import { RestaurantMenuItemComponent } from './restaurants/restaurant-detail/restaurant-menu-item/restaurant-menu-item.component';
import { RestaurantReviewsComponent } from './restaurants/restaurant-detail/restaurant-reviews/restaurant-reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    RestaurantMenuComponent,
    RestaurantShoppingCartComponent,
    RestaurantMenuItemComponent,
    RestaurantReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
