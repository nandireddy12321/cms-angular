import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VendorShow } from '../vendorshow';
import { Observable } from 'rxjs';
import { VendorshowService  } from '../vendorshow.service';
@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {
vendorname:string
vid :VendorShow;
  constructor(private _vendorshowservice :VendorshowService) {
    this.vendorname = localStorage.getItem("user");
     //alert(this.vendorname) 
    
     this._vendorshowservice.searchvendor(this.vendorname).subscribe(x=>{
      this.vid=x
       
       localStorage.setItem("vid",x.vendorid.toString());
    })
  }


  ngOnInit(): void {
  }

}
