import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants : Restaurant[];
  constructor(private _restaurantservice : RestaurantService){
    this._restaurantservice.showRestaurant().subscribe(x=>{
      this.restaurants=x;
    })
  }
  
  

  ngOnInit(): void {}
}
