import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Sessao } from '../models/Sessao';

@Injectable({
  providedIn: 'root'
})
export class ProgramacaoServiceService {

  listaDeSessoesPelaData: Sessao[] = []

  constructor(http: HttpClient) { }

  //https://localhost:44384/Sessao/consultar-sessoes-pela-data?Data=2023-10-01'

}
