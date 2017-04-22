import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { RecipesComponent }  from './recipes/recipes.component';
import { RecipesListComponent }  from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent }  from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent }  from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent }  from './shopping-list/shopping-list.component';
import { ShoppingEditComponent }  from './shopping-list/shopping-edit/shopping-edit.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  AppComponent,
  HeaderComponent,
  RecipesComponent,
  RecipesListComponent, 
  RecipesDetailComponent,
  RecipesItemComponent,
  ShoppingListComponent,
  ShoppingEditComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
