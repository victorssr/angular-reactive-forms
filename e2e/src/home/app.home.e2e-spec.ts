import { browser, logging } from 'protractor';
import { AppHomePage } from './app.home.po';

describe('Testes da página inicial', () => {
    let page: AppHomePage;

    beforeEach(() => {
        page = new AppHomePage();
    });

    it('Deve exibir uma mensagem na página inicial', async () => {
        page.navegarParaHome();

        await page.getTitleText().then(value => {
            expect(value).toEqual('Desenvolvimento SPA com Angular');
        });
    });

    afterEach(async () => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);

        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE
        } as logging.Entry));
    });
});