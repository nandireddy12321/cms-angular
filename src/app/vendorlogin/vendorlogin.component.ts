import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { VendorshowService  } from '../vendorshow.service';
@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {
  userName : string;
  passCode : string;
  result:string;
  login() {

    this._vendorshowService.validateVendorshow(this.userName,this.passCode).subscribe(x=>{
      if (x=="1") {
       localStorage.setItem("user",this.userName);
        this._router.navigate(["/vendorDashBoard"])
      }
    })
   }
  // logMe() {
  //   if (this.passCode=="Lokesh" && this.userName=="Lokesh") {
  //     this._router.navigate(['/vendorDashBoard']);

  //   }

  // }
  constructor(private _router : Router,private _vendorshowService:VendorshowService) { }

  ngOnInit(): void {
  }

}
