import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginaciclo',
  templateUrl: './paginaciclo.component.html',
  styleUrls: ['./paginaciclo.component.css']
})
export class PaginacicloComponent implements OnInit {

  nome = '';
  datacorte = '';
  datakr = '';


  constructor () {}
  ngOnInit(): void {}

  Enviar(){}

  executa(){
    alert("Os dados foram salvos")
   // location.reload();
   console.log(this.datacorte)
   console.log(this.datakr)
   console.log(this.nome)
   
  }
}
