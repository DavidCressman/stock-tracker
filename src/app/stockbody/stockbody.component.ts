import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Chart} from 'chart.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stockbody',
  templateUrl: './stockbody.component.html',
  styleUrls: ['./stockbody.component.scss']
})
export class StockbodyComponent implements OnInit {
  title = 'Historic Values Graph';
  LineChart=[];

 

  constructor(private data: DataService,private formBuilder: FormBuilder) { }

  ngOnInit() {
  
    setTimeout(this.datatograph.bind(this),600)
  /*setTimeout(this.data.getData.bind(this),100);
  setTimeout(this.makeChart.bind(this), 600)*/
}

datatograph(){
  this.data.getData();
  setTimeout(this.makeChart.bind(this), 500)
}
makeChart(){
  this.LineChart = new Chart('lineChart', {
    type: 'line',
  data: {
   labels:(this.data.dates).reverse(),
   datasets: [{
       label: 'Price in USD',
       data: (this.data.values).reverse(),
       fill:false,
       lineTension:0.2,
       borderColor: "green",
       borderWidth: 1}]
      }
    })
  }
 

}

