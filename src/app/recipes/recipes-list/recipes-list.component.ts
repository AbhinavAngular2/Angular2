import { Component } from '@angular/core';
@Component({
  selector: 'app-recipeslist', // use as elememt
  templateUrl: `./recipes-list.component.html`,
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent{
 color: string;
 
 items: any[];
  constructor(){
  this.items = [{
            name:'Recipes1',
            description:'Description1',
			image:'https://upload.wikimedia.org/wikipedia/commons/e/e2/Brunswick_stew.jpg'
        },
		{
            name:'Recipes2',
            description:'Description2',
			image:'https://upload.wikimedia.org/wikipedia/commons/e/e2/Brunswick_stew.jpg'
        },
		{
            name:'Recipes3',
            description:'Description3',
			image:'https://upload.wikimedia.org/wikipedia/commons/e/e2/Brunswick_stew.jpg'
        },
		{
            name:'Recipes3',
            description:'Description3',
			image:'https://upload.wikimedia.org/wikipedia/commons/e/e2/Brunswick_stew.jpg'
        },
		{
            name:'Recipes3',
            description:'Description3',
			image:'https://upload.wikimedia.org/wikipedia/commons/e/e2/Brunswick_stew.jpg'
        }
        ];
  }
   value = '';
  update(value: string) { this.value = value; }
  gotoDetail(){
  alert('AbhingotoDetail');
  }
 }
