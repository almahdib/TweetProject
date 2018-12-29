import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { User } from "../../model/model.user";
import { Router } from "@angular/router";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.component.html",
  styleUrls: ["./tweets.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TweetsComponent implements OnInit {
  listTweets;
  loading=true;
  search: string ;
  currentUser: User;
  constructor(
    public authService: AuthService,
    public router: Router,
    public http: Http,
    private spinnerService: Ng4LoadingSpinnerService

  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

  }
  searchx(search){
    this.spinnerService.show();

    console.log(this.search);
    this.http.get("http://localhost:8383/search/"+this.search).subscribe(
      data => {
        this.listTweets = data.json();
        console.log(this.listTweets);
        console.log("hi 2");
        this.spinnerService.hide();

      },
      error1 => {
        console.log("hi 3");

        console.log(error1);
      }
    );

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
