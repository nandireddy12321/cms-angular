import { Component, OnInit } from '@angular/core';
import { CustomerShowService } from '..//customer-show.service';

import { Orderdetails } from '../orderdetails';

import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  custid:string;
  Orderdetails :Orderdetails;
  result : any;
    constructor(private _CustomerShowService:CustomerShowService) {
      this.custid = localStorage.getItem("custid");
      this.Orderdetails = new Orderdetails();
      this.Orderdetails.customerid=this.custid;
     }
     placeOrder()
     {
       alert("your order placed successfully");
       this._CustomerShowService.placeorder(this.Orderdetails).subscribe(x=>{
         this.result=x;
       });
     }

  ngOnInit(): void {
  }

}
