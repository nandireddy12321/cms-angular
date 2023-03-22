import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerShow } from './customer-show';
import { Observable } from 'rxjs';
import { Orderdetails } from './orderdetails';

@Injectable({
  providedIn: 'root'
})
export class CustomerShowService {
  showCustomerShow() : Observable<CustomerShow[]>
  {
    return this._http.get<CustomerShow[]>("https://localhost:44382/api/Customer");
    
    
  }
  validateCustomer(user : string, pwd : string) : Observable<string> {
    return this._http.get<string>("https://localhost:44382/api/Customer/"+user+ "/" +pwd)
  }

   searchcustomer(name:string) :Observable<CustomerShow>
   {
     return this._http.get<CustomerShow>("https://localhost:44382/api/Customer/SearchByName/"+name);
  }


  placeorder(orderdetails: Orderdetails){
    return this._http.post("https://localhost:44382/api/Customer/placeorder",orderdetails);
  }
  constructor(private _http : HttpClient) { }
}
