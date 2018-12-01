import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { User } from "../../model/model.user";
import { Router } from "@angular/router";

@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.component.html",
  styleUrls: ["./tweets.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TweetsComponent implements OnInit {
  listTweets;
  search: string = "Youssef";
  currentUser: User;
  constructor(
    public authService: AuthService,
    public router: Router,
    public http: Http
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    console.log(this.listTweets);
    this.http.get("http://localhost:8383/tweets").subscribe(
      data => {
        this.listTweets = data.json();
        console.log(this.listTweets);
        console.log("hi 2");
      },
      error1 => {
        console.log("hi 3");

        console.log(error1);
      }
    );
  }
  logOut() {
    this.authService.logOut().subscribe(
      data => {
        this.router.navigate(["/login"]);
      },
      error => {}
    );
  }
}
