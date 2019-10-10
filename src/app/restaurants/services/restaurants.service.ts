import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { APP_API } from '../../api/app.api';
import { RestaurantModel } from "../restaurant/models/restaurant.model";
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  restaurants(): Observable<RestaurantModel[]> {
    return this.http.get(`${APP_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantsById(id: string): Observable<RestaurantModel> {
    return this.http.get(`${APP_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}