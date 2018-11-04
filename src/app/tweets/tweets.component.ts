import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  listTweets;


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8383/tweets")
      .subscribe(data =>{
        this.listTweets = data;
        },error1 => {
        console.log( error1);
        }
      )
  }

}
