import { Component, OnInit } from '@angular/core';
import { BarService, BarServiceMock } from './bar.service';

@Component({
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  providers: [
    { provide: BarService, useClass: BarServiceMock }
  ]
})
export class BarDiZonesComponent implements OnInit {

  barBebida1: string;

  constructor(private barService: BarService) { }

  ngOnInit(): void {
    this.barBebida1 = this.barService.obterBebidas();
  }
}
