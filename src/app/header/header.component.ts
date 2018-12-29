import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { User } from './../model/model.user';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  constructor(
    public authService: AuthService,
    public router: Router,
    public http: Http,
    private spinnerService: Ng4LoadingSpinnerService

  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

  }

  ngOnInit() {
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
