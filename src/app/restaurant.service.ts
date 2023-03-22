import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  showRestaurant() : Observable<Restaurant[]>
  {
    return this._http.get<Restaurant[]>("https://localhost:44382/api/Restaurant");
    
    
  }
  constructor(private _http : HttpClient) { }
}
