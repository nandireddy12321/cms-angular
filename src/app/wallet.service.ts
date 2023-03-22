import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallet } from './wallet';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WalletService {
  showWallet() : Observable<Wallet[]>
  {
    return this._http.get<[Wallet]>("https://localhost:44382/api/wallet");
    
    
  }
  constructor(private _http : HttpClient) { }
}
