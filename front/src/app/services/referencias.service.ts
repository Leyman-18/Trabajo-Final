import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReferenciaI } from '../models/referencia';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {
  api_url = 'http://localhost:4000';
  base_path = `${this.api_url}/referencia/`
  base_path2 = `${this.api_url}/Referencia`

  constructor(private http: HttpClient) { }

  getAllReferencia(): Observable<{referencia:ReferenciaI[]}>{
    return this.http.get<{referencia:ReferenciaI[]}>(this.base_path)
  }

  getOneReferencia(id: number): Observable<{referencia:ReferenciaI[]}>{
    return this.http.get<{referencia:ReferenciaI[]}>(`${this.base_path2}${id}`)
  }

  createReferencia(data:any): Observable<ReferenciaI>{
    return this.http.post<ReferenciaI>(this.base_path2, data)
  }

  updateReferencia(id: number, data: ReferenciaI): Observable<ReferenciaI>{
    return this.http.put<ReferenciaI>(`${this.base_path2}${id}`, data)
  }

  deleteReferencia(id: number):Observable<ReferenciaI>{
    return this.http.delete<ReferenciaI>(`${this.base_path2}${id}`)
  }
}
