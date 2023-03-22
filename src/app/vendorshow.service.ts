import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VendorShow } from './vendorshow';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VendorshowService {
  showVendorShow() : Observable<VendorShow[]>
  {
    return this._http.get<VendorShow[]>("https://localhost:44382/api/vendor");
    
    
  }
  validateVendorshow(user : string, pwd : string) : Observable<string> {
    return this._http.get<string>("https://localhost:44382/api/vendor/"+user+ "/" +pwd)
  }


  searchvendor(name:string) :Observable<VendorShow>
   {
     return this._http.get<VendorShow>("https://localhost:44382/api/Vendor/SearchByName/"+name);
  }


  AcceptOrReject (oid:number,vid:string,status:string){
    return this._http.post("https://localhost:44382/api/VendorOrder/AcceptOrReject/"+oid+"/"+vid+"/"+status,null);
  }


  constructor(private _http : HttpClient) { }
}
