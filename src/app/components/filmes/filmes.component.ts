import { Component, Input } from '@angular/core';
import { Filme } from 'src/app/models/Filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  constructor() {}

  @Input() filme: Filme = {
    id: 70,
    nomeDoFilme: "Ação Explosiva",
    duracao: 130,
    classificacao: "teste",//"PG-13",
    genero: "Ação",
    horario: "2023-10-01T19:00:00",
    idioma: 0,
    nomeDaSala: "Sala 1",
    salaVip: false,
    sala3D: false,
    capacidadeDisponivel: 10,
    thumbnail: "https://lh3.googleusercontent.com/pw/ADCreHf8nh0vIlcq2d8X2byO94nBIZDC1MRdfDO-BqnNIrHM1iXrX0rLJdccBapcp4V_gnJS60oiYT3tm1LIiqnIrArT7CLJIXJVDEhinwzxnCLsscVf8vRuOHhu9x-3TpH8yAv2Jer5NufOoXqeLCmrZUVux2i1mBso8LwE5Dv9OYorTZiWPbV4O3fRqbThCwVJJKkRCd92EbOZcRNJnFAiDon41pnZfsz5J_04kyLe8oVKdyDJ_ZjxwuCvkisSl4qPLymg17z6k4eApTe9XKJLKJ3165c_I0sQZ0YEyC9-zln-qoxTgTvlh_vIiYW8i1OinNcHrFcHrEk0ogpncahVlJWwUGkBzvHqKoxMQ9NduyR10QbyhenJx_mLhGap8o8WV4CZJZ1Iwd-8Ve3MaEiWQsegvcso3ANBYNjNH8BQ0jx9G9nOA1FHwKB4O5ZWeRAG2NQoBaLY7g4YrhPkCLphFA2U3gqbE-b1rm41U78jGrAG9Q3zZt3LE69IAl0rpKjHCGcPwVC-I11wP7jaIL_9D6oBBaK83VkzzVKPR0-Kn2su4CSTOB_Avh26E8eSAXbTW64VCOTiAvJMh5J-kwrkboqZCK80vqE4EiZQNvdr0l7R1dWfFg0JcSWW6VqHts1GkiCHzRzmbAyAqkIrU9cphm97LvqHUtnCQca8uIHqYPEfFKWVpwQ1DF37VhpFMfBYfU5Zy-6u4esnrglOc2oiBgNU08JHyqGEl7sqt8C-roosq0renyGaNWjrS35cd8UmDbeT6yfAzRHu6joZ6Ncd-I1qgr6Lxm-HI3G-gV8RzApF9y5b_lQ7LSejFsTfNoj0D4wnQLe2NrWqMucivGKY6hWQxU-whdgVNpLZbW11FIo9G_KFVlO34izF8BnXVr6JUcZMUKZgvN_l1ATNPX41lT85ivY=w250-h370-s-no?authuser=0"
  };
}
