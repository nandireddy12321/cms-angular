import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
 import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashBoardComponent } from './customer-dash-board/customer-dash-board.component';
import { CustomerShowComponent } from './customer-show/customer-show.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorOrdersComponent } from './vendor-orders/vendor-orders.component';

import { VendorShowComponent } from './vendor-show/vendor-show.component';
import { WalletComponent } from './wallet/wallet.component';
import { CustomerorderdetailsComponent } from './customerorderdetails/customerorderdetails.component';
import { CustomerpendingordersComponent } from './customerpendingorders/customerpendingorders.component';
import { VendorpendingordersComponent } from './vendorpendingorders/vendorpendingorders.component';
import { AcceptorRejectComponent } from './acceptor-reject/acceptor-reject.component';
const appRoutes : Routes = [
  {path:'',component:HomepageComponent},
  {path:'customerLogin',component:CustomerloginComponent},
  {path:'vendorLogin',component:VendorloginComponent},

  {path:'customerDashBoard',component:CustomerDashBoardComponent},
  {path:'vendorDashBoard',component:VendorDashboardComponent},

  {path:'customerDashBoard',component:CustomerDashBoardComponent,  children : [
    {path:'showRestaurant',component:RestaurantComponent,outlet:'mphasis'}, 
    {path:'showCustomer',component:CustomerShowComponent,outlet:'mphasis'},
    {path:'showcustomerwallet',component:WalletComponent,outlet:'mphasis'},
    {path:'placeOrder',component:PlaceorderComponent,outlet:'mphasis'},
    {path:'customerorderdetails',component:CustomerorderdetailsComponent,outlet:'mphasis'},
    {path:'customerpendingorders',component:CustomerpendingordersComponent,outlet:'mphasis'},
  ]  
},
{path:'vendorDashBoard',component:VendorDashboardComponent, children: [
  {path:'showVendor',component:VendorShowComponent,outlet:'mphasis'},
  {path:'vendorOrders',component:VendorOrdersComponent,outlet:'mphasis'},
  {path:'vendorpendingorders',component:VendorpendingordersComponent,outlet:'mphasis'},
  {path:'acceptorreject',component:AcceptorRejectComponent,outlet:'mphasis'},
]},


]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CustomerloginComponent,
    VendorloginComponent,
    CustomerDashBoardComponent,
    CustomerShowComponent,
    PlaceorderComponent,
    RestaurantComponent,
    VendorComponent,
    VendorDashboardComponent,
    VendorOrdersComponent,
    
    VendorShowComponent,
    WalletComponent,
    CustomerorderdetailsComponent,
    CustomerpendingordersComponent,
    VendorpendingordersComponent,
    AcceptorRejectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
