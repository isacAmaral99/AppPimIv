import { Endereco } from './../models/Endereco';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';
import { Cliente } from '../models/Clientes';
import { Usuario } from '../models/Usuarios';


const urlApiE = 'https://localhost:5001/api/endereco';
const urlApiC = 'https://localhost:5001/api/Clientes';
@Injectable({
  providedIn: 'root'
})
export class CadastrosService {
  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Content-Type": " application/json; charset=utf-8",
    }),
  };

  constructor(private http: HttpClient) { }

  async CadastraEndereco(Logradouro: string, Bairro: string,Complemento:string,Numero : string,Cidade:string,Estado:string) {
    debugger
    console.log(this.httpOptions);
    
    return this.http.post<Endereco[]>(
      urlApiE,
      { Logradouro: Logradouro, Bairro: Bairro,Complemento:Complemento,Numero:Numero,Cidade:Cidade,Estado:Estado, observe: "response" },
      this.httpOptions
    );
  }
  
  
  async CadastraClientes(_nome: string, _telefone: string,_cnpj:string,_empresa : string,_email:string,_codEndereco:number) {
    debugger
    console.log(this.httpOptions);
    
    return this.http.post<Cliente[]>(
      urlApiC,
      { nome: _nome, telefone: _telefone, cnpj:_cnpj, empresa:_empresa, email:_email, codEndereco:_codEndereco, observe: "response" },
      this.httpOptions
    );
  }
  async CadastraUsuarios(_codPerfil: string, _codCliente: string, _userAtivo:string,_empresa : string,_login:string,_senha:string,_cnh:string,_rg:string,_Cpf:string) {
    console.log(this.httpOptions);
    
    return this.http.post<Usuario[]>(
      urlApiC,
      { codPerfil: _codPerfil, codCliente: _codCliente, userAtivo:_userAtivo, empresa:_empresa, login:_login, senha:_senha,_cnh:_cnh,rg:_rg,cpf:_Cpf, observe: "response" },
      this.httpOptions
    );
  }
}
