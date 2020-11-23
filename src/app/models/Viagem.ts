export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class Viagem   extends Model{
  codViagem:number;
  CodUsuario : string ;
  CodCarro : number;
  CodEndereco:number;
  HoraSaida: Date;
  HoraEntrada : Date;
  Descricao: number;
  CarroKmInicial: number;
  CarroKmFinal : number;
  CarroKmTotalViagem: number;
 

}
