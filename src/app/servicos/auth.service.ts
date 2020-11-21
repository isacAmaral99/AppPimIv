import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AuthUsuario } from '../models/AuthUsuario';

const urlApi = 'https://localhost:5001/api/Autenticacao';
const urlApiC = 'https://localhost:5001/api/Usuarios';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-Requested-With",
      "Content-Type": " application/json; charset=utf-8",
    }),
  };

  constructor(private http: HttpClient) { }
  async autenticacao(userName: string, password: string) {
    console.log(this.httpOptions);
    
    return this.http.post<AuthUsuario[]>(
      urlApi,
      { Login: userName, Senha: password, observe: "response" },
      this.httpOptions
    );
  }
  ConsultaSituacao(userName: string, password: string) {
    console.log(this.httpOptions);

    return this.http.get<AuthUsuario>(
      `${urlApiC}/${"PimIV"}/${userName}/${password}`,
      this.httpOptions
    );
  }
}
