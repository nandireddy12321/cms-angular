import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orderdetails } from './orderdetails';
@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  showcustomerorders(cid:string) :Observable<Orderdetails[]>
  {

    return this._http.get<Orderdetails[]>("https://localhost:44382/api/Order/CustomerOrders/"+cid)
  }
  showcustomerpendingorders(cid:string) :Observable<Orderdetails[]>
  {

    return this._http.get<Orderdetails[]>("https://localhost:44382/api/Order/CustomerPendingOrders/"+cid)
  }

  showvendorpendingorders(vid:string) :Observable<Orderdetails[]>
  {

    return this._http.get<Orderdetails[]>("https://localhost:44382/api/Order/VendorPendingOrders/"+vid)
  }


  showvendororders(vid:string) :Observable<Orderdetails[]>
  {

    return this._http.get<Orderdetails[]>("https://localhost:44382/api/Order/VendorOrders/"+vid)
  }
  constructor(private _http : HttpClient) { }
}
