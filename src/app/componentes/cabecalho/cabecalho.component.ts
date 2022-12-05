import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  ativo:Boolean = false;

      abrirMenu(){
        
      let menu = (document.getElementById("menu") as HTMLInputElement);
      let conteudo = (document.getElementById("conteudo") as HTMLInputElement);
        
      if(!this.ativo){

          menu.style.width ='250px';
          conteudo.style.marginLeft = '250px';
          this.ativo = true;

        }else{

          menu.style.width ='0px';
          conteudo.style.marginLeft = '0px';
          this.ativo = false;
        }
        
        }
        
    }

