import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Produto } from '../models/produto';
import { Observable, fromEvent } from 'rxjs';
import { ProdutoCountComponent } from '../componentes/produto-count.component';
import { ProdutoDetalhesComponent } from '../componentes/produto-detalhe.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[];

  @ViewChild('teste', { static: false }) titulo: ElementRef;
  @ViewChild(ProdutoCountComponent, { static: false }) produtoCount: ProdutoCountComponent;

  @ViewChildren(ProdutoDetalhesComponent) produtosDetalhe: QueryList<ProdutoDetalhesComponent>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produtos = this.route.snapshot.data['produtos'];
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
