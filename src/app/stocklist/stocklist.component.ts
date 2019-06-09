import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.scss']
})
export class StocklistComponent implements OnInit {
  prices= [];
  constructor(private data: DataService) { }

  


   ngOnInit() {
     console.log(this.data.symbol);
  this.data.getData();
  }





}
