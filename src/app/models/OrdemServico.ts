export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class OrdemServico  extends Model{
  
  CodCliente: number;
  CodUsuario: number;
  CodCarro: number;
  Descricao: string;
  

}
