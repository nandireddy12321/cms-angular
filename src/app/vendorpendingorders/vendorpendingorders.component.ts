import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orderdetails } from '../orderdetails';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-vendorpendingorders',
  templateUrl: './vendorpendingorders.component.html',
  styleUrls: ['./vendorpendingorders.component.css']
})
export class VendorpendingordersComponent implements OnInit {
  pendingdetails :Orderdetails[];
  vid:string;

  constructor(private _pendingorderservice :OrderdetailsService,private _router:Router) { 
    this.vid=localStorage.getItem("vid");
    
    this._pendingorderservice.showvendorpendingorders(this.vid).subscribe(x=>{
      this.pendingdetails=x;
    })
  }
  acceptorreject(oid:number,vid:string){
    localStorage.setItem("oid",oid.toString());
    localStorage.setItem("vid",vid);
    this._router.navigate(['../vendordashboard',{outlets:{'mphasis':['acceptor-reject']}}]);
  }
  ngOnInit(): void {
  }

}
