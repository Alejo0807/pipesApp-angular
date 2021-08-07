import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent implements OnInit {

  //i18nSelect
  name: string = 'Alejandro';
  gender: string = 'male';

  invitationsMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  //i18nPlural
  clients: string[] = ['Maria', 'Jose', 'Pepito', 'Juanita'];

  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeClient() {
    this.name = 'Ashley';
    this.gender = 'female';
  }

  deleteCliente() {
    this.clients.pop();
  }

  //KeyValuePipe
  person = {
    name: 'Alejandro',
    age: 23,
    address: 'Yungay, Perú'
  }

  //JSON Pipe
  heroes = [
    {
      name: 'Superma',
      vuela: true
    },
    {
      name: 'Batman',
      vuela: false
    },
    {
      name: 'Capitana Marvel',
      vuela: true
    },
  ]

  //Async Pipe
  myObservable = interval(500);

  valuePromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Fin de la promesa')
    },3500 );
  });

}
