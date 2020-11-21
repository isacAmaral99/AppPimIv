import { Endereco } from './../models/Endereco';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';
import { Cliente } from '../models/Clientes';

const urlApiC = 'https://localhost:5001/api/endereco';
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
    console.log(this.httpOptions);
    
    return this.http.post<Endereco[]>(
      urlApiC,
      { Logradouro: Logradouro, Bairro: Bairro,Complemento:Complemento,Numero:Numero,Cidade:Cidade,Estado:Estado, observe: "response" },
      this.httpOptions
    );
  }
  
  
  async CadastraClientes(_nome: string, _telefone: string,_cnpj:string,_empresa : string,_email:string,_codEndereco:number) {
    console.log(this.httpOptions);
    
    return this.http.post<Cliente[]>(
      urlApiC,
      { nome: _nome, telefone: _telefone,cnpj:_cnpj,empresa:_empresa,email:_email,codEndereco:_codEndereco, observe: "response" },
      this.httpOptions
    );
  }
}
