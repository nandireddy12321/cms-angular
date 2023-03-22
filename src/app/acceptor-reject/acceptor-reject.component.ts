import { Component, OnInit } from '@angular/core';
import { VendorshowService } from '../vendorshow.service';


@Component({
  selector: 'app-acceptor-reject',
  templateUrl: './acceptor-reject.component.html',
  styleUrls: ['./acceptor-reject.component.css']
})
export class AcceptorRejectComponent implements OnInit {

  oid: number;
  vid: string;
   status : string;
   result : any;
    constructor(private _VendorshowService:VendorshowService) { 
      this.oid = parseInt(localStorage.getItem("oid"));
      this.vid = localStorage.getItem("vid").toString();
    }
    decide(){
  this._VendorshowService.AcceptOrReject(this.oid,this.vid,this.status).subscribe(x=>{
    alert('hi');
    this.result=x;
  })
}

  ngOnInit(): void {
  }

}
