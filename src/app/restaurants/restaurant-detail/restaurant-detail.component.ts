import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurants.service';
import { RestaurantModel } from '../restaurant/models/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  public restaurant: RestaurantModel;

  constructor(private restaurantService: RestaurantService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRestaurant()
  }

  public getRestaurant(): void{
    this.restaurantService.restaurantsById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }
}
