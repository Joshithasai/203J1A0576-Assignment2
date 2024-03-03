import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getItems(){
    return [{name:"sugar",des:"--500gms"},{name:"milk",des:"--1lit"},{name:"coffee",des:"--500gms"}];
  }
}
