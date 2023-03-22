import { Component, OnInit } from '@angular/core';
import { CustomerShow } from '../customer-show';
import { CustomerShowService } from '../customer-show.service';


@Component({
  selector: 'app-customer-dash-board',
  templateUrl: './customer-dash-board.component.html',
  styleUrls: ['./customer-dash-board.component.css']
})
export class CustomerDashBoardComponent implements OnInit {
  customerName : string
  customer :CustomerShow;
  constructor(private _customershowservice :CustomerShowService) {
    this.customerName = localStorage.getItem("user");
    // alert(this.customerName) 
    
     this._customershowservice.searchcustomer(this.customerName).subscribe(x=>{
      
       this.customer=x
       localStorage.setItem("cid",x.customerid.toString());
    })
  }

  



  ngOnInit(): void {
  }

}
