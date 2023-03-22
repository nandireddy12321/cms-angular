import { Component, OnInit } from '@angular/core';
import { Orderdetails } from '../orderdetails';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-vendor-orders',
  templateUrl: './vendor-orders.component.html',
  styleUrls: ['./vendor-orders.component.css']
})
export class VendorOrdersComponent implements OnInit {
  orderdetails : Orderdetails[];
  vid : string;
  constructor(private _orderdetailsService :OrderdetailsService) {
    this.vid =localStorage.getItem("vid");
    
    this._orderdetailsService.showvendororders(this.vid).subscribe(x=>{
      this.orderdetails=x;
    })
   }

  ngOnInit(): void {
  }

}
