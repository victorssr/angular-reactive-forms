import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CadastroComponent } from "../demos/ReactiveForms/cadastro/cadastro.component";

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent> {

    canDeactivate(cadastroComponent: CadastroComponent) {
        if (cadastroComponent.preenchimentoPendente) {
            return window.confirm('Deseja realmente sair desta tela? Todo os dados preenchidos serão perdidos.');
        }

        return true;
    }
}