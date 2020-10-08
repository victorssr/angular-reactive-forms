import { browser, element, by } from 'protractor';
import { AppBasePage } from '../app.base.po';

export class AppCadastroPage extends AppBasePage {

    constructor() {
        super();
    }

    navegarParaCadastro() {
        this.navegarViaUrl("/cadastro");
    }

    navegarParaCadastroPorLink() {
        this.navegarPorLink('Cadastro');
    }

    iniciarNavegacao() {
        this.navegarParaHome();
        this.navegarParaCadastroPorLink();
    }

    obterTituloCadastro() {
        return this.obterElementoXPath("/html/body/app-root/app-cadastro/div/h1").getText();
    }

    nome = element(by.id("nome"));
    cpf = element(by.id("cpf"));
    email = element(by.id("email"));
    senha = element(by.id("senha"));
    confirmacaoSenha = element(by.id("confirmacaoSenha"));
    btnConcluir = element(by.id("btnConcluir"));

    obterResultadoCadastro() {
        return this.obterElementoXPath("/html/body/app-root/app-cadastro/div/form/p[4]/b").getText();
    }

    obterErroConfirmacaoSenha() {
        return this.obterElementoXPath("/html/body/app-root/app-cadastro/div/form/div[5]/div/span/p").getText();
    }
}