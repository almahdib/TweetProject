import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { HttpModule } from "@angular/http";
import { AccountService } from "./services/account.service";
import { routing } from "./app.routing";
import { FacebookModule } from "ngx-facebook";
import { UrlPermission } from "./urlPermission/url.permission";
import { TweetsComponent } from "./components/tweets/tweets.component";
import { ResultComponent } from './result/result.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TweetsComponent,
    ResultComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    FacebookModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
  ],
  providers: [AuthService, AccountService, UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule {}
