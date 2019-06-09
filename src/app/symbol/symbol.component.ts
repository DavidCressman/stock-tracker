import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.scss']
})
export class SymbolComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;
  symbol = '';
  constructor(private formBuilder: FormBuilder,private data: DataService) {
   }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      symbol: ['', Validators.required],
    });
  }
  onStockChange(symbol : string ) {  
  
  this.symbol= symbol
 }

  onSubmit() {
    this.data.symbol = this.symbol;
    this.submitted = true;
    if (this.messageForm.invalid) {
        return;
    }
    this.success = true;  
  
}
    
}
