import { TestBed } from '@angular/core/testing';

import { ProdutoService } from './produto.service';
import { Produto } from './../models/produto';


const produtosFake: Produto[] = [
    {
        id: 1,
        nome: 'Teste',
        ativo: true,
        valor: 100,
        imagem: 'celular.jpg'
    },
    {
        id: 2,
        nome: 'Teste 2',
        ativo: true,
        valor: 200,
        imagem: 'celular.jpg'
    },
    {
        id: 3,
        nome: 'Teste 3',
        ativo: true,
        valor: 300,
        imagem: 'celular.jpg'
    }
];

const produtoFake: Produto = {
    id: 3,
    nome: 'Teste 3',
    ativo: true,
    valor: 300,
    imagem: 'celular.jpg'
};

describe('ProdutoService', () => {
    let service: ProdutoService;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            providers: [
                ProdutoService
            ]
        });

        service = bed.get(ProdutoService);
    });

    it('Deve retornar uma lista de produtos', () => {
        spyOn(service, 'obterTodos').and.returnValue(produtosFake);

        let result = service.obterTodos('ativos');

        expect(result.length).toBe(3);
        expect(result).toEqual(produtosFake);
    });

    it('Deve retornar um produto', () => {
        spyOn(service, 'obterPorId').and.returnValue(produtoFake);

        const result = service.obterPorId(3);

        expect(result).toEqual(produtoFake);
        expect(result.id).toEqual(3);
    });
});