import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { HeaderComponent }  from './recipes/recipes.component';
import { HeaderComponent }  from './recipes/recipes-list/recipes-list.component';
import { HeaderComponent }  from './recipes/recipes-detail/recipes-detail.component';
import { HeaderComponent }  from './recipes/recipes-list/recipes-item/recipes-item.component';
import { HeaderComponent }  from './shopping/shopping-list.component';
import { HeaderComponent }  from './shopping/shopping-edit/shopping-edit.component';
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
