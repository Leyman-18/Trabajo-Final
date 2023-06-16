import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViajesI } from '../models/viaje';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  api_url = 'http://localhost:4000';
  base_path = `${this.api_url}/viajes/`
  base_path2 = `${this.api_url}/viaje/`

  constructor(private http: HttpClient) { }

  getAllViajes(): Observable<{viajes:ViajesI[]}>{
    return this.http.get<{viajes:ViajesI[]}>(this.base_path)
  }

  getOneViajes(id: number): Observable<{viajes:ViajesI[]}>{
    return this.http.get<{viajes:ViajesI[]}>(`${this.base_path2}${id}`)
  }

  createViajes(data:any): Observable<ViajesI>{
    return this.http.post<ViajesI>(this.base_path2, data)
  }

  updateViajes(id: number, data: ViajesI): Observable<ViajesI>{
    return this.http.put<ViajesI>(`${this.base_path2}${id}`, data)
  }

  deleteViajes(id: number):Observable<ViajesI>{
    return this.http.delete<ViajesI>(`${this.base_path2}${id}`)
  }
}
