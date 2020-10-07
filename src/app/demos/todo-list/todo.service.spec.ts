import { Store } from './todo.store';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { TasksService } from './todo.service';
import { Observable, Observer } from 'rxjs';
import { Task } from './models/task';

const todolist: Task[] = [
    {
        id: 1,
        nome: "Responder e-mails",
        finalizado: true,
        iniciado: true
    }
]

function createReponse(body) {
    return Observable.create((observer: Observer<any>) => {
        observer.next(body);
    })
}

class MockHttp {
    get() {
        return createReponse(todolist);
    }
}

describe('TasksService', () => {

    let service: TasksService;
    let http: HttpClient;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useClass: MockHttp },
                TasksService,
                Store
            ]
        });

        service = bed.get(TasksService);
        http = bed.get(HttpClient);
    });

    it('Deve retornar lista de tarefas', () => {
        service.getTodoList$.subscribe((result) => {
            expect(result.length).toBe(1);
            expect(result).toEqual(todolist);
        });
    });

});