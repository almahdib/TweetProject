import { ResultComponent } from './result/result.component';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { UrlPermission } from "./urlPermission/url.permission";
import { TweetsComponent } from "./components/tweets/tweets.component";

const appRoutes: Routes = [
  { path: "profile", component: TweetsComponent, canActivate: [UrlPermission] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "result", component: ResultComponent },


  // otherwise redirect to profile
  { path: "**", redirectTo: "/login" }
];

export const routing = RouterModule.forRoot(appRoutes);
