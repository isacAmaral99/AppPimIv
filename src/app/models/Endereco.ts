export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class Endereco  extends Model{

  codEndereco: number;
  Logradouro: string;
  Bairro:string;
  Complemento:string;
  Numero: string;
	Cidade :string;
	Estado :string;




}
