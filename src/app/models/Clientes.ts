export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class Cliente  extends Model{
  
  codCliente: number;
  nome: string;
  telefone: string;
  cnpj: string;
  empresa: string;
  email: string;
  codEndereco: number;
  codEnderecoNavigation:number;
  usuarios: [];




}
