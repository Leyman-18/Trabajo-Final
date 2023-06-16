import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteI } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  api_url_nodejs = 'http://localhost:4000';
  base_path = `${this.api_url_nodejs}/clientes`;
  constructor(
    private http:HttpClient
  ) { }

  getAllCliente():Observable<{cliente:ClienteI[]}>{
    return this.http
      .get<{cliente:ClienteI[]}>(this.base_path)
  }

  getOneCliente():Observable<{cliente:ClienteI[]}>{
    return this.http
      .get<{cliente:ClienteI[]}>(this.base_path)
  }

}
