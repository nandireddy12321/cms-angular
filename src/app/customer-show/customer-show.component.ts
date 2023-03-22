import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerShow } from '../customer-show';
import { CustomerShowService  } from '../customer-show.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-show',
  templateUrl: './customer-show.component.html',
  styleUrls: ['./customer-show.component.css']
})
export class CustomerShowComponent implements OnInit {

  customs : CustomerShow[];
  constructor(private _CustomerShowservice : CustomerShowService){
    this._CustomerShowservice.showCustomerShow().subscribe(x=>{
      this.customs=x;
    })
  
  }
   


  ngOnInit(): void {
  }
}


