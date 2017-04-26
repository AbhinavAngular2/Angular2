import { Component } from '@angular/core';
//import { Router } from '@angular/router';
//import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home', // use as elememt
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{
   //private router = Router;

   // constructor(router: Router) {
       // this.router =router;
   // }

gotoShopingList(){
 //this.router.navigate(['/shopping-list']);
 //this.router.navigate(['/shopping-list'],{queryParam:{allowedit:'1'},fragment="loading"});
}
 }
