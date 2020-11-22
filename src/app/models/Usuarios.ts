export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class Usuario  extends Model{
  
  codUsuario: number;
  codPerfil: number;
  codCliente: number;
  userAtivo: number;
  login: string;
  senha: string;
  cnh: string;
  rg: string;
  cpf: string;

}
