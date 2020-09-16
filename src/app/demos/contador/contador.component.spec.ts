import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ContadorComponent } from './contador.component';

describe('ContadorComponent', () => {

    let component: ContadorComponent;
    let fixture: ComponentFixture<ContadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContadorComponent
            ]
        });

        fixture = TestBed.createComponent(ContadorComponent);
        component = fixture.componentInstance;
    });

    it('Deve incrementar o valor', () => {
        component.incrementar();
        expect(component.contador).toBe(1);
    });

    it('Deve decrementar o valor', () => {
        component.contador = 1;

        component.decrementar();
        expect(component.contador).toBe(0);
    });

    it('O contador não pode ser menor que o valor mínimo', () => {
        component.decrementar();
        expect(component.contador).toBe(component.minValue);

        component.decrementar();
        expect(component.contador).toBe(component.minValue);
    });

    it('O contador não pode ser maior que o valor máximo', () => {
        for (let i = 0; i <= component.maxValue; i++) {
            component.incrementar();
        }

        expect(component.contador).toBe(component.maxValue);
    });

});