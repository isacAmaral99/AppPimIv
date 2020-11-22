export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class Carro  extends Model{
  
  codCarro: number;
  codUsuario: string;
  placa: string;
  ano: string;
  chassi: string;
  quilometragem: number;
  descricao: string;
  

}
