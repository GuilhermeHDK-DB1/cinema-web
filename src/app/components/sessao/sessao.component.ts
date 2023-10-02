import { CadastrarIngressoCommand } from './../../models/CadastrarIngressoCommand';
import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() emitirSessao = new EventEmitter();

  public comprarIngresso() {
    const cadastrarIngressoCommand: CadastrarIngressoCommand = {
      clienteId: 100, //valor fixo - alterar depois de implementado o login
      sessaoId: this.sessao.id,
      tipo: 0 //valor fixo - alterar depois de implementado o botao de meia entrada ou inteira
    }
    console.log(cadastrarIngressoCommand);
    
    this.emitirSessao.emit(cadastrarIngressoCommand);
  }
}
