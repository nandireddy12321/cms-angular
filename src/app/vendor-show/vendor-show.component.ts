import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendorshowService  } from '../vendorshow.service';
import { VendorShow } from '../vendorshow';


@Component({
  selector: 'app-vendor-show',
  templateUrl: './vendor-show.component.html',
  styleUrls: ['./vendor-show.component.css']
})
export class VendorShowComponent implements OnInit {

  Vendor : VendorShow[];
  constructor(private _Vendorshowservice : VendorshowService){
    this._Vendorshowservice.showVendorShow().subscribe(x=>{
      this.Vendor=x;
    })
  
  }
  


  ngOnInit(): void {
  }

}
