import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent implements OnInit {

  netSales: number = 6545657489.3423232;
  percentage: number = 0.57;

  constructor() { }

  ngOnInit(): void {
  }

}
