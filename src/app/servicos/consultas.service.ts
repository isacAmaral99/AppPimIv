import { Carro } from './../models/Carro';
import { Usuario } from './../models/Usuarios';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';
import { Cliente } from '../models/Clientes';





@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  urlApiE = 'https://localhost:5001/api/endereco';
  urlApiC = 'https://localhost:5001/api/Clientes';
  urlApiU = 'https://localhost:5001/api/Usuarios';
  urlApiCar = 'https://localhost:5001/api/Carro';

  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Content-Type": " application/json; charset=utf-8",
    }),
  };
  constructor(private http: HttpClient) { }


  async ConsultaClientes() {
    
    console.log(this.httpOptions);
    
    return this.http.get<Cliente[]>(
      `${this.urlApiC }`,this.httpOptions
    );
  }
  async ConsultaUsuarios() {
    
    console.log(this.httpOptions);
    
    return this.http.get<Usuario[]>(
      `${this.urlApiU }`,this.httpOptions
    );
  }
  async ConsultaCarro() {
    console.log(this.httpOptions);
    
    return this.http.get<Carro[]>(
      `${this.urlApiCar }`,this.httpOptions
    );
  }
}
