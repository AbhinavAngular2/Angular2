import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { HomeComponent }  from './home/home.component';
import { RecipesComponent }  from './recipes/recipes.component';
import { RecipesListComponent }  from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent }  from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent }  from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent }  from './shopping-list/shopping-list.component';
import { ShoppingEditComponent }  from './shopping-list/shopping-edit/shopping-edit.component';
import { DirectiveComponent }  from './directive/directive.component';
const appRoutes: Routes = [
{path:'',component:HomeComponent},
{path:'recipes',component:RecipesComponent},
{path:'recipes/:id/:name',component:RecipesComponent},
{path:'shopping-list',component:ShoppingListComponent},
{path:'directive-list',component:DirectiveComponent},
]
//@NgModule takes a metadata object that tells Angular how to compile and run module code.
//
@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes,{useHash:true})],//import module name
  //The imports array--  When we required router and http feature then we have to add RouterModule and HttpModule inside the import array
  //Add a module to the imports array when the application requires its features.
  //This application, like most applications, executes in a browser. Every application that executes in a browser needs the BrowserModule from @angular/platform-browser. So every such application includes the BrowserModule in its root AppModule's imports array.
  // includes all module which are required to use feature of that module.
  
  declarations: [  // list of all component which is required
  AppComponent,
  HeaderComponent,
  HomeComponent,
  RecipesComponent,
  RecipesListComponent, 
  RecipesDetailComponent,
  RecipesItemComponent,
  ShoppingListComponent,
  ShoppingEditComponent,
  DirectiveComponent
  ],
  //The declarations array-- You tell Angular which components belong to the AppModule by listing it in the module's declarations array. As you create more components, you'll add them to declarations.
  //You must declare every component in an NgModule class. If you use a component without declaring it, you'll see a clear error message in the browser console.
  // so you needs to declare all component which are we create.Inside the NgModule.
  
  bootstrap:[ AppComponent ] 
  // AppComponent is a root component and is added in index.html in case of bootstraping process
  //the root component that Angular creates and inserts into the index.html
//The bootstrap array --- You launch the application by bootstrapping the root AppModule. 
 // means in case of bootstrapping process 'AppComponent' attach into index.html

 })

export class AppModule { }
