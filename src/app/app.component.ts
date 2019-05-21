import { Component, OnInit } from '@angular/core';

import { Cidades } from './cidades.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  
nome1 = 'Angular';
cid : string[] ;
aparecer_mensagem: boolean = false;

constructor(private cidades:Cidades){
 
} 

ngOnInit(){
  this.cid = this.cidades.getCidades();
  
 }
clickMessage:string = '';
 onClickMe(){
   this.clickMessage = "Exemplo de Mensagem no evento click do botão!"
   //alert('Botão clicado')
   this.aparecer_mensagem = !this.aparecer_mensagem;
 }


}

