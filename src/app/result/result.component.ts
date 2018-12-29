import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as CanvasJS from './canvasjs.min.js';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResultComponent implements OnInit {
  listTweetsR;
  listStat;
  idWord = 1;
  positive;
  negative;



  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    public http: Http,

  ) { }
  show()
  {


  }

getSerchedWords(){
  this.http.get("http://localhost:8383/searchedWords?size=100").subscribe(
    data => {
      this.listTweetsR = data.json();
    },
    error1 => {
      console.log(error1);
    }
  );
}
  ngOnInit() {
    this.getSerchedWords();
  console.log(this.positive);
   console.log( this.negative);
   this.remplir(50,50);
    }
remplir(t1,t12)
{
  let chart = new CanvasJS.Chart("chartContainer", {
    theme: "light",
    animationEnabled: true,
    exportEnabled: true,
/*      title:{
      text: "Monthly Expense"
    }, */
    data: [{

      type: "pie",
      showInLegend: true,
      toolTipContent: "<b>{name}</b>:  (#percent%)",
      indexLabel: "{name} - #percent%",
      dataPoints: [
        { y:  t1?t1:60, name: "Positive" ,color:"#72dc58"},
        { y:  t12?t12:40, name: "Negative" ,color:"#e93f33" },

      ]
    }]
  });

  chart.render();
    }

        getResult(){

            this.spinnerService.show();

            console.log(this.idWord);
            this.http.get("http://localhost:8383/results/"+ this.idWord ).subscribe(
              data => {
                this.listStat = data.json();

                console.log("hi ====> " + this.listStat.tweetsPos);
                this.spinnerService.hide();
                this.remplir(this.listStat.tweetsPos,this.listStat.tweetsNeg);
              },
              error1 => {
                console.log("hi 3");

                console.log(error1);
              }
            );


        }
}
