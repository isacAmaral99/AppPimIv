export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class ClienteSmall  extends Model{
  
  codCliente: number;
  nome: string;
  cnpj: string;
  codEndereco: number;


}
