import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styles: [
  ]
})
export class ContadorComponent implements OnInit {

  contador: number = 0;

  minValue: number = 0;
  maxValue: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    if (this.contador == this.maxValue)
      return;

    this.contador += 1;
  }

  decrementar() {
    if (this.contador == this.minValue)
      return;

    this.contador -= 1;
  }

}
