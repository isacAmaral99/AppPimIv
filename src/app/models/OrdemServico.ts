export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class OrdemServico  extends Model{
  
  codCliente: number;
  codUsuario: number;
  codCarro: number;
  descricao: string;
  

}
