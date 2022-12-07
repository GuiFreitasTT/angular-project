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


}
