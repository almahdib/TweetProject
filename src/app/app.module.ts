import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { TweetsComponent } from './tweets/tweets.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

const root: Routes = [
  {path : 'tweets' , component: TweetsComponent},
  {path : 'header' , component: HeaderComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(root),
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
