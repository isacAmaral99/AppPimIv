export class Model {

  constructor(objeto?) {
      Object.assign(this, objeto);
  }

}

export class AuthUsuario  extends Model{
    public Login : string ;
    clientesCodCliente : number;
    TipoPerfil:number;
    Senha: string;
    codPerfil : number;
    codUsuario: number;

    usuariosCodUsuario:number;

}
