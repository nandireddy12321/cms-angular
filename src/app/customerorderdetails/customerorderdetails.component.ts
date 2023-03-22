import { Component, OnInit } from '@angular/core';
import { Orderdetails } from '../orderdetails';

import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-customerorderdetails',
  templateUrl: './customerorderdetails.component.html',
  styleUrls: ['./customerorderdetails.component.css']
})
export class CustomerorderdetailsComponent implements OnInit {

  orderdetails : Orderdetails[];
  cid : string;
  constructor(private _orderdetailsService :OrderdetailsService) {
    this.cid =localStorage.getItem("cid");
    
    this._orderdetailsService.showcustomerorders(this.cid).subscribe(x=>{
      this.orderdetails=x;
    })
   }

  ngOnInit(): void {
  }

}
