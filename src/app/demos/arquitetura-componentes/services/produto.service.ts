import { Produto } from "../models/produto";
import { OnInit, Injectable } from "@angular/core";

@Injectable()
export class ProdutoService {

    produtos: Produto[];

    constructor () {
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
        }];
    }

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterPorId(id: number): Produto {
        return this.produtos.find(produto => produto.id == id);
    }
}