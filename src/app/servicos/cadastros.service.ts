import { Carro } from './../models/Carro';
import { Endereco } from './../models/Endereco';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';
import { Cliente } from '../models/Clientes';
import { Usuario } from '../models/Usuarios';
import { OrdemServico } from '../models/OrdemServico';


const urlApiE = 'https://localhost:5001/api/endereco';
const urlApiC = 'https://localhost:5001/api/Clientes';
const urlApiU = 'https://localhost:5001/api/Usuarios';
const urlApiCar = 'https://localhost:5001/api/Carro';
const urlApiOrdemServico = 'https://localhost:5001/api/OrdemServico';


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
  async CadastraUsuarios(_codPerfil: string, _codCliente: string, _userAtivo:string, _login:string, _senha:string, _cnh:string, _rg:string, _Cpf:string) {
    console.log(this.httpOptions);
    
    return this.http.post<Usuario[]>(
      urlApiU,
      { codPerfil: _codPerfil, codCliente: _codCliente, userAtivo:_userAtivo, login:_login, senha:_senha, cnh:_cnh, rg:_rg, cpf:_Cpf, observe: "response" },
      this.httpOptions
    );
  }

  async CadastraCarros(_codUsuario: string, _codPlaca: string, _AnoCarro:string, _CarroChassi:string, _CarroKm:number, _CarroDesc:string) {
    console.log(this.httpOptions);
    
    return this.http.post<Carro[]>(
      urlApiCar,
      { CodUsuario: _codUsuario, Placa:_codPlaca, Ano:_AnoCarro, Chassi:_CarroChassi, Quilometragem:_CarroKm, Descricao:_CarroDesc, observe: "response" },
      this.httpOptions
    );
  }

  async CadastraOrdemServico(_CodCliente: string, _CodUsuario: string, _CodCarro:string, _Descricao:string) {
    console.log(this.httpOptions);
    
    return this.http.post<OrdemServico[]>(
      urlApiOrdemServico,
      { CodCliente: _CodCliente, CodUsuario:_CodUsuario, CodCarro:_CodCarro, Descricao:_Descricao, observe: "response" },
      this.httpOptions
    );
  }
}
