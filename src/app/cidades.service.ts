import { Injectable } from '@angular/core';

@Injectable()
export class Cidades
 {
  constructor(){

  }
  getCidades(){
    return['Conchas','Barueri','São Paulo'];
  }
}