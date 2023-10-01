import { Sessao } from './../models/Sessao';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramacaoService {

  private readonly API = "https://localhost:44384/Sessao/consultar-sessoes-pela-data";

  constructor(private http: HttpClient) { }

  //https://localhost:44384/Sessao/consultar-sessoes-pela-data?Data=2023-10-01
  public consultarSessoesPelaData(data:string): Observable<Sessao[]> {
    const params: HttpParams = new HttpParams().append('Data', data);
    return this.http.get<Sessao[]>(this.API, { params });
  }

}
