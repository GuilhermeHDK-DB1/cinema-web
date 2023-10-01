import { Component, Input } from '@angular/core';
import { Sessao } from 'src/app/models/Sessao';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.css']
})
export class SessaoComponent {

  constructor() {}

  @Input() sessao: Sessao = {
    id: 0,
    nomeDoFilme: "",
    duracao: 0,
    classificacao: "",
    genero: "",
    horario: "",
    idioma: 0,
    nomeDaSala: "",
    salaVip: false,
    sala3D: false,
    capacidadeDisponivel: 0,
    thumbnail: ""
  };
}
