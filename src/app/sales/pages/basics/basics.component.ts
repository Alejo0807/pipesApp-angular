import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  nameLower: string = 'alejandro';
  nameUpper: string = 'ALEJANDRO';
  completeName: string = 'AleJaNdRo NobleCiLLa';

  date: Date = new Date(); //today

  constructor() { }

  ngOnInit(): void {
  }

}
