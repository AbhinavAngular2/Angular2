import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipes', // use as elememt
  templateUrl: `./recipes.component.html`,
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit{
 //user:{id:number,name:string};
 user={id:10,name:'abhi'};
 constructor(private route:ActivatedRoute){}
	 ngOnInit(){
	 console.log(this.route.snapshot.queryParams);
	 console.log(this.route.snapshot.fragment);
	// console.log(this.route.snapshot.param);
		 //this.user={
			//id:this.route.snapshot.param['id'],
			//name:this.route.snapshot.param['name']
		 //};
	  }
 }
