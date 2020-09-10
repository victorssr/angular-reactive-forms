import { Component, OnInit, Inject, Injector, NgZone } from '@angular/core';
import { BarService, BarFactory, BebidaService } from './bar.service';
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
    },
    { provide: BebidaService, useExisting: BarService }
  ]
})
export class BarDiZonesComponent implements OnInit {

  unidadeConfig: string;
  manualToken: BarUnidadeConfig;
  token: BarUnidadeConfig;
  barBebida1: string;
  barBebida2: string;

  constructor(
    private barService: BarService,
    @Inject('ConfigManualUnidade') private configManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig,
    private bebidaService: BebidaService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.barBebida1 = this.barService.obterBebidas();
    this.manualToken = this.configManual;
    this.token = this.config;
    this.unidadeConfig = this.barService.obterUnidadeConfig();

    this.barBebida2 = this.bebidaService.obterBebidas();
  }

  public progress: number = 0;
  public label: string;

  processWithinAngularZone() {
    this.label = 'dentro';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalizado por dentro do Angular'));
  }

  processOutsideOfAngularZone() {
    this.label = 'fora';
    this.progress = 0;

    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => console.log('Finalizado por fora do Angular'));
      })
    });
  }

  _increaseProgress(doneCallBack: () => void) {
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallBack), 10);
    }
    else {
      doneCallBack();
    }
  }
}
