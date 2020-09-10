import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { BarService, BarServiceMock } from './bar.service';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';

@Component({
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  providers: [
    { provide: BarService, useClass: BarServiceMock }
  ]
})
export class BarDiZonesComponent implements OnInit {

  manualToken: BarUnidadeConfig;
  token: BarUnidadeConfig;
  barBebida1: string;

  constructor(
    private barService: BarService,
    @Inject('ConfigManualUnidade') private configManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig
  ) { }

  ngOnInit(): void {
    this.barBebida1 = this.barService.obterBebidas();
    this.manualToken = this.configManual;
    this.token = this.config;
  }
}
