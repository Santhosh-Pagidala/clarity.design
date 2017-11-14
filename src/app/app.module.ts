import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { ViewsComponent } from './views.component';
import { TodosComponent } from './todos.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'views', component: ViewsComponent },
  { path: 'todos/:id', component: TodosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
	ViewsComponent,
	TodosComponent
  ],
  imports: [
    BrowserModule,
	ClarityModule.forRoot(),
	HttpClientModule,
	RouterModule.forRoot(
      appRoutes //,{ enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [
	  AppComponent
  ]
})

export class AppModule { }
