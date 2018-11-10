import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  listTweets;
  search: string = "Youssef";


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    console.log("hi 1");
    this.httpClient.get("http://localhost:8383/tweets" )
      .subscribe(data =>{
        this.listTweets = data;
        },error1 => {
        console.log( error1);
        }
      )
  }

  searchFun(){
    console.log("hi 2");
    this.httpClient.get("http://localhost:8383/search?search="+this.search )
      .subscribe(data =>{
          this.listTweets = data;
        },error1 => {
          console.log( error1);
        }
      )
  }
}
