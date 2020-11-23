import { ConsultasService } from './../servicos/consultas.service';

import { Component, OnInit } from '@angular/core';
import { Viagem } from '../models/Viagem';

@Component({
  selector: 'app-consulta-viagem',
  templateUrl: './consulta-viagem.page.html',
  styleUrls: ['./consulta-viagem.page.scss'],
})
export class ConsultaViagemPage implements OnInit {
  viagens :Viagem[]=[];
  constructor(private search:ConsultasService) { }

  ngOnInit() {
    this.carregar()
  }

  async carregar(){

    (await this.search.ConsultaViagem()).subscribe(
      data=>{
        this.viagens = data
      }
    )

  }
}
