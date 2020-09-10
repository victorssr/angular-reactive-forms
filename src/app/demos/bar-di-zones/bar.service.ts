import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BarService {

    constructor(private httpClient: HttpClient) { }

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