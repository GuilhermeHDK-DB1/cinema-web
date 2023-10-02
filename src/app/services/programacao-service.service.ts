import { Sessao } from './../models/Sessao';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { format } from 'date-fns';
import { CadastrarIngressoCommand } from '../models/CadastrarIngressoCommand';
import { IngressoResult } from '../models/IngressoResult';

@Injectable({
  providedIn: 'root'
})
export class ProgramacaoService {

  private readonly API = "https://localhost:44384";
  // private readonly API = "https://localhost:44384/Sessao/consultar-sessoes-pela-data";

  constructor(private http: HttpClient) { }

  //https://localhost:44384/Sessao/consultar-sessoes-pela-data?Data=2023-10-01
  public consultarSessoesPelaData(data:Date): Observable<Sessao[]> {
    console.log("consultarSessoesPelaData", data);
    const dataFormatada = format(data, 'yyyy-MM-dd')
    console.log('dataFormatada',dataFormatada)

    const params: HttpParams = new HttpParams().append('Data', dataFormatada);
    return this.http.get<Sessao[]>(`${this.API}/Sessao/consultar-sessoes-pela-data`, { params });
    // return this.http.get<Sessao[]>(this.API, { params });
  }

  //https://localhost:44384/Ingresso/adicionar
  public CadastrarIngresso(ingresso: CadastrarIngressoCommand): Observable<IngressoResult> {
    return this.http.post<IngressoResult>(`${this.API}/Ingresso/adicionar`, ingresso);
  }

}
