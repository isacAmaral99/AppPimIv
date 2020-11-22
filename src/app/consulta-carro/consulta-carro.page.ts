import { Carro } from './../models/Carro';
import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../servicos/consultas.service';

@Component({
  selector: 'app-consulta-carro',
  templateUrl: './consulta-carro.page.html',
  styleUrls: ['./consulta-carro.page.scss'],
})
export class ConsultaCarroPage implements OnInit {

  carros: Carro[] = [];
  constructor(private search: ConsultasService) { }

  ngOnInit() {
    this.carregar()
  }

  async carregar(){
    (await this.search.ConsultaCarro()).subscribe(
      data => {
        this.carros = data
      }
    )
  }

}
