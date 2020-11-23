import { Entrada } from './../models/Entrada';
import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../servicos/consultas.service';

@Component({
  selector: 'app-consulta-entrada',
  templateUrl: './consulta-entrada.page.html',
  styleUrls: ['./consulta-entrada.page.scss'],
})
export class ConsultaEntradaPage implements OnInit {

  entrada: Entrada[] = [];
  constructor(private search: ConsultasService) { }

  ngOnInit() {
    
    this.Carregar()
  }

  async Carregar(){
    
    (await this.search.ConsultaEntrada()).subscribe(
      data => {
        this.entrada =data
      }
    );
  }

}
