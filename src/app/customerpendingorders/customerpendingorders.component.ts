import { Component, OnInit } from '@angular/core';
import { Orderdetails } from '../orderdetails';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-customerpendingorders',
  templateUrl: './customerpendingorders.component.html',
  styleUrls: ['./customerpendingorders.component.css']
})
export class CustomerpendingordersComponent implements OnInit {

  pendingdetails :Orderdetails[];
  cid:string;

  constructor(private _pendingorderservice :OrderdetailsService) { 
    this.cid=localStorage.getItem("cid");
    
    this._pendingorderservice.showcustomerpendingorders(this.cid).subscribe(x=>{
      this.pendingdetails=x;
    })
  }


  ngOnInit(): void {
  }

}
