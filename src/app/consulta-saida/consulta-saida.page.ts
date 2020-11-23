
import { Component, OnInit } from '@angular/core';
import { Saida } from '../models/Saida';
import { ConsultasService } from '../servicos/consultas.service';

@Component({
  selector: 'app-consulta-saida',
  templateUrl: './consulta-saida.page.html',
  styleUrls: ['./consulta-saida.page.scss'],
})
export class ConsultaSaidaPage implements OnInit {

  saida: Saida[] = [];
  constructor(private search: ConsultasService) { }

  ngOnInit() {
    
    this.Carregar()
  }

  async Carregar(){
    
    (await this.search.ConsultaSaida()).subscribe(
      data => {
        this.saida =data
      }
    );
  }

}
