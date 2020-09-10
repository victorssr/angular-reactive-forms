import { Component, OnInit } from '@angular/core';
import { Filme } from './models/filme';
import { ImageFormatterPipe } from './image.pipe';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  providers: [
    ImageFormatterPipe
  ]
})
export class FilmesComponent implements OnInit {

  constructor(private formatImage: ImageFormatterPipe) { }

  filmes: Filme[];

  ngOnInit(): void {
    this.filmes = [
      {
        nome: 'Um sonho de liberdade',
        dataLancamento: new Date('12/07/1994'),
        valor: 150.00,
        imagem: 'crossplat.jpg',
        tamanho: '1567465423'
      },
      {
        nome: 'O Poderoso Chefão',
        dataLancamento: new Date('01/12/1972'),
        valor: 200.00,
        imagem: 'full_dev.jpg',
        tamanho: '32412341251'
      },
      {
        nome: 'Batman: O Cavaleiro das Trevas',
        dataLancamento: new Date('08/01/2008'),
        valor: 50.25,
        imagem: 'performance.jpg',
        tamanho: '4891231'
      },
      {
        nome: 'o poderoso chefão 2',
        dataLancamento: new Date('01/12/1974'),
        valor: 89.99,
        imagem: 'produtividade.jpg',
        tamanho: '987615321'
      }
    ];

    this.filmes.forEach(filme => {
      filme.imagem = this.formatImage.transform(filme.imagem, 'default', true);
    });
  }

}
