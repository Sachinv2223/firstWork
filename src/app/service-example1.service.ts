import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceExample1Service {

  constructor() { }

  public array = [
    { id: 1, name: 'Monu'},
    { id: 2, name: 'Sonu'},
    { id: 3, name: 'Ronu'},
    { id: 4, name: 'Janu'},
    { id: 5, name: 'Manu'},
    { id: 6, name: 'Soni'},
    { id: 7, name: 'Moni'},
    { id: 8, name: 'Joni'},
    { id: 9, name: 'Roni'},
    { id: 10, name: 'Yani'},
    { id: 11, name: 'Tani'}
  ]

  getDistrict(){
    return <any>(this.array);
  }
}
