import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallet } from '../wallet';
import { Observable } from 'rxjs';
import { WalletService } from '../wallet.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  wallets : Wallet[];
  constructor(private _walletservice : WalletService){
    this._walletservice.showWallet().subscribe(x=>{
      this.wallets=x;
    })
  }
  

  ngOnInit(): void {
  }

}
