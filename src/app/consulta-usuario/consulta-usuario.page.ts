import { ConsultasService } from './../servicos/consultas.service';
import { Usuario } from './../models/Usuarios';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.page.html',
  styleUrls: ['./consulta-usuario.page.scss'],
})
export class ConsultaUsuarioPage implements OnInit {
 usuarios :Usuario[]=[];
  constructor(private search : ConsultasService) { }

  ngOnInit() {
    this.Carregar();
  }
  async Carregar(){
    (await this.search.ConsultaUsuarios()).subscribe( 
      data => {
        this.usuarios = data
      }
    )

  }

}
