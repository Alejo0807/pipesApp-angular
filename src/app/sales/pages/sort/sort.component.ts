import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent implements OnInit {

  onUppercase: boolean = true;
  sortBy: string = 'name';


  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.onUppercase = !this.onUppercase;
  }

  by(type: string) {
    this.sortBy = type;
  }

}
