import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from "./bar.config";

// export function BarFactory(httpClient: HttpClient, config: BarUnidadeConfig) {
export function BarFactory(httpClient: HttpClient, injector: Injector) {
    return new BarService(httpClient, injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable()
export class BarService {
    constructor(
        private httpClient: HttpClient,
        private config: BarUnidadeConfig
    ) { }

    obterUnidadeConfig() {
        return 'Unidade ID: ' + this.config.unidadeId + ' e Unidade Token: ' + this.config.unidadeToken;
    }

    obterBebidas() {
        return "Ciroc, Belvedere e Absolut";
    }
}

@Injectable()
export class BarServiceMock {
    constructor(private httpClient: HttpClient) { }

    obterBebidas() {
        return "Mock";
    }
}

export abstract class BebidaService {
    obterBebidas: () => string
}