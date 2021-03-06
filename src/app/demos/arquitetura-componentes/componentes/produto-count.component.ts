import { Component, Input } from "@angular/core";
import { Produto } from "../models/produto";


@Component({
    selector: 'produto-count',
    template: `
        <div>
            <div>
                Produtos Ativos: {{ contadorAtivos() }} no total de {{ produtos.length }} produtos <br><br>
            </div>
        </div>
    `
})
export class ProdutoCountComponent {
    @Input()
    produtos: Produto[];

    contadorAtivos(): number {
        if (!this.produtos) return 0;

        return this.produtos.filter((produto) => produto.ativo).length;
    }

}