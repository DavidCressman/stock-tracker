import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { EventEmitter } from 'events';
// api key = LVDISDU7O76M9IOA

@Injectable({
  providedIn: 'root'
})
export class DataService {
  newSymbol:EventEmitter = new EventEmitter();
  
  
  price= [];
  dates=[];
  Priced=[];
  values=[];
  symbol='';
 
  constructor(private http: HttpClient) {
      
    
   }

   setSymbol(symbol){
    this.symbol=symbol;
    this.newSymbol.emit(this.symbol);

   }



  getPrices() {
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_Daily&symbol='+
    this.symbol+'&interval=5min&outputsize=compact&apikey=LVDISDU7O76M9IOA')
  }

  getData(){
    this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_Daily&symbol='+
    this.symbol+'&interval=5min&outputsize=compact&apikey=LVDISDU7O76M9IOA').subscribe(data => {
      data = data['Time Series (Daily)'];
      this.dates = Object.keys(data);
      console.log(this.dates);
      this.price = Object.keys(data).map(date=>{
        return{
          date,
          price: (data[date])['2. high']
        }
        })
        this.Priced = Object.keys(data).map(date=>{
          return{
            date,
            price: (data[date])['2. high']
          }
          })
        this.dates = Object.keys(data);
        this.values = this.Priced.map(day=>{
          return day.price;

        })
        console.log(this.values);
        
    
        
        

      
        
      }
      
  );  

  }
}
