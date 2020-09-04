import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit {

  constructor() { }

  produtos: Produto[];

  ngOnInit(): void {
    this.produtos = [{
      id: 1,
      nome: 'Mouse',
      ativo: true,
      valor: 50,
      imagem: 'performance.jpg'
    },
    {
      id: 2,
      nome: 'Teclado Mecânico',
      ativo: true,
      valor: 250,
      imagem: 'crossplat.jpg'
    },
    {
      id: 3,
      nome: 'Monitor FULL HD 25 polegadas',
      ativo: true,
      valor: 750,
      imagem: 'full_dev.jpg'
    },
    {
      id: 4,
      nome: 'Headset Gamer',
      ativo: false,
      valor: 230,
      imagem: 'produtividade.jpg'
    }]
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }

}
