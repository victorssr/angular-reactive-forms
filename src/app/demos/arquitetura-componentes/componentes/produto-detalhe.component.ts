import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Produto } from "../models/produto";


@Component({
    selector: 'produto-detalhe',
    templateUrl: './produto-detalhe.component.html'
})
export class ProdutoDetalhesComponent {

    @Input()
    produto: Produto;

    @Output()
    status: EventEmitter<any> = new EventEmitter();

    emitirEvento() {
        this.status.emit(this.produto);
    }
}