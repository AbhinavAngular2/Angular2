import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home', // use as elememt
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{
   private router = Router;

    constructor(r: Router) {
        this.router =r;
    }

gotoShopingList(){
 this.router.navigate(['/shopping-list']);
}
 }
