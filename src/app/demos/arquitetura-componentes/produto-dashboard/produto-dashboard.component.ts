import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Produto } from '../models/produto';
import { Observable, fromEvent } from 'rxjs';
import { ProdutoCountComponent } from '../componentes/produto-count.component';
import { ProdutoDetalhesComponent } from '../componentes/produto-detalhe.component';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('teste', { static: false }) titulo: ElementRef;
  @ViewChild(ProdutoCountComponent, { static: false }) produtoCount: ProdutoCountComponent;
  @ViewChildren(ProdutoDetalhesComponent) produtosDetalhe: QueryList<ProdutoDetalhesComponent>;

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

  ngAfterViewInit(): void {
    let click: Observable<any> = fromEvent(this.titulo.nativeElement, 'click');

    click.subscribe(() => {
      console.log("Clicou!");
      return;
    });

    console.log("Objetos do contador:", this.produtoCount.produtos);

    this.produtosDetalhe.forEach((produto) => {
      console.log(produto);
    });

  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }

}
