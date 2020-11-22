import { Component, OnInit } from '@angular/core';
import { ClienteSmall } from '../models/ClientesSmall';
import { ConsultasService } from '../servicos/consultas.service';

@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.page.html',
  styleUrls: ['./consulta-clientes.page.scss'],
})
export class ConsultaClientesPage implements OnInit {

  clientes: ClienteSmall[] = [];
  constructor(private search: ConsultasService) { }

  ngOnInit() {
    
    this.Carregar()
  }

  async Carregar(){
    
    (await this.search.ConsultaClientes()).subscribe(
      data => {
        this.clientes =data
      }
    );
  }

}

