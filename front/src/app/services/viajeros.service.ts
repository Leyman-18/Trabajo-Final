import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViajerosI } from '../models/viajeros';

@Injectable({
  providedIn: 'root'
})
export class ViajerosService {
  api_url = 'http://localhost:4000';
  base_path = `${this.api_url}/viajeros/`
  base_path2 = `${this.api_url}/viajero/`

  constructor(private http: HttpClient) { }

  getAllViajeros(): Observable<{viajeros:ViajerosI[]}>{
    return this.http.get<{viajeros:ViajerosI[]}>(this.base_path)
  }

  getOneViajeros(id: number): Observable<{viajeros:ViajerosI[]}>{
    return this.http.get<{viajeros:ViajerosI[]}>(`${this.base_path2}${id}`)
  }

  createViajeros(data:any): Observable<ViajerosI>{
    return this.http.post<ViajerosI>(this.base_path2, data)
  }

  updateViajeros(id: number, data: ViajerosI): Observable<ViajerosI>{
    return this.http.put<ViajerosI>(`${this.base_path2}${id}`, data)
  }

  deleteViajeros(id: number):Observable<ViajerosI>{
    return this.http.delete<ViajerosI>(`${this.base_path2}${id}`)
  }
}
