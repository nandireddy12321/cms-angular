 import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
 import { CustomerShowService } from '../customer-show.service';


@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  

  //custId : number;
  userName : string;
  passCode : string;
  result:string;
  login() {

   this._customershowservice.validateCustomer(this.userName,this.passCode).subscribe(x=>{
     if (x=="1") {
      localStorage.setItem("user",this.userName);
       this._router.navigate(["/customerDashBoard"])
     }
   })
  }

//    if (this.passCode=="Lokesh" && this.userName=="Lokesh") {
//     this._router.navigate(['/customerDashBoard']);

//   }
// }
constructor(private _router : Router,private _customershowservice:CustomerShowService) {}
ngOnInit(): void {
}

}
  
  
  


 