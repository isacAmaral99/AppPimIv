import { CadastrarSaidaPage } from '../cadastrar-saida/cadastrar-saida.page';
export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class Entrada  extends Model{
  
  codEntrada:number;
  codViagem:number;
  CodCarro:number;
  horaEntrada:string;

}
