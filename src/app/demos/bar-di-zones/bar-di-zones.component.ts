import { Component, OnInit, Inject, Injector } from '@angular/core';
import { BarService, BarFactory } from './bar.service';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  providers: [
    // { provide: BarService, useClass: BarServiceMock },
    {
      provide: BarService,
      useFactory: BarFactory,
      deps: [
        HttpClient,
        // BAR_UNIDADE_CONFIG,
        Injector
      ]
    }
  ]
})
export class BarDiZonesComponent implements OnInit {

  unidadeConfig: string;
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
    this.unidadeConfig = this.barService.obterUnidadeConfig();
  }
}
