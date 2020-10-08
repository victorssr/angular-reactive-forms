import { HttpClient } from '@angular/common/http';
import { browser, logging } from 'protractor';
import { AppCadastroPage } from './app.cadastro.po';


describe('Testes da formulário de cadastro', () => {
    let page: AppCadastroPage;

    beforeEach(() => {
        page = new AppCadastroPage();
    });

    it('Deve navegar até o formulário de cadastro', async () => {
        page.iniciarNavegacao();

        await page.obterTituloCadastro().then(value => {
            expect(value).toEqual("Demo Cadastro");
        });
    });

    it('Deve testar o formulário de cadastro com sucesso', async () => {
        page.nome.sendKeys('Victor Savoi');
        page.cpf.sendKeys('64744059023');
        page.email.sendKeys('contato@victorsavoi.dev.br');
        page.senha.sendKeys('Teste123');
        page.confirmacaoSenha.sendKeys('Teste123');

        page.btnConcluir.click();
        page.esperar(1000);

        await page.obterResultadoCadastro().then(value => {
            expect(value).toContain('"nome":"Victor Savoi"')
        });
    });

    it('Deve validar senhas diferentes', async () => {
        page.iniciarNavegacao();

        page.nome.sendKeys('Victor Savoi');
        page.cpf.sendKeys('64744059023');
        page.email.sendKeys('contato@victorsavoi.dev.br');
        page.senha.sendKeys('Teste123');
        page.confirmacaoSenha.sendKeys('Teste1234');

        page.nome.click();

        await page.obterErroConfirmacaoSenha().then(value => {
            expect(value).toContain('Senhas não conferem')
        });
    });

    afterEach(async () => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);

        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE
        } as logging.Entry));
    });
});