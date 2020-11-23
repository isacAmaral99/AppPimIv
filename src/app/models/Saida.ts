import { CadastrarSaidaPage } from './../cadastrar-saida/cadastrar-saida.page';
export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class Saida  extends Model{
  
  codSaida:number;
  codUsuario:number;
  codViagem:number;
  codCarro:string;
  horaSaida:string;

}


