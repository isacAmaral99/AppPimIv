
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';
import { Cliente } from '../models/Clientes';





@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  urlApiE = 'https://localhost:5001/api/endereco';
  urlApiC = 'https://localhost:5001/api/Clientes';
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
    debugger
    console.log(this.httpOptions);
    
    return this.http.get<Cliente[]>(
      `${this.urlApiC }`,this.httpOptions
    );
  }
}
