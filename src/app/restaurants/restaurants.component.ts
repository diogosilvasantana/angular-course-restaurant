import { Component, OnInit } from '@angular/core';

import { RestaurantModel } from './restaurant/models/restaurant.model';
import { RestaurantService } from './services/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantModel[];

  constructor(private restaurantsService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  public getRestaurants(){
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }


}
