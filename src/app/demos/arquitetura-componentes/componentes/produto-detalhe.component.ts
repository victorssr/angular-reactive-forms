import { Component, Input } from "@angular/core";
import { Produto } from "../models/produto";


@Component({
    selector: 'produto-detalhe',
    templateUrl: './produto-detalhe.component.html'
})
export class ProdutoDetalhesComponent {

    @Input()
    produto: Produto;

}