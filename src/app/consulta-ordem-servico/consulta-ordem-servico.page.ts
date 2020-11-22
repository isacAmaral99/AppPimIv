import { ConsultasService } from './../servicos/consultas.service';
import { OrdemServico } from './../models/OrdemServico';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-ordem-servico',
  templateUrl: './consulta-ordem-servico.page.html',
  styleUrls: ['./consulta-ordem-servico.page.scss'],
})
export class ConsultaOrdemServicoPage implements OnInit {
ordem: OrdemServico[]=[];
  constructor(private search: ConsultasService) { }

  ngOnInit() {
    this.carregar()
  }
  async carregar(){
    (await this.search.ConsultaOrdemServico()).subscribe(
      data=>{
        this.ordem = data, console.log(data)      }
    )
    console.log(this.ordem)
  }
  

}
