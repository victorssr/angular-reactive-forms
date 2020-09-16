import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Task } from "./models/task";
import { tap } from "rxjs/operators";
import { Store } from "./todo.store";

@Injectable()
export class TasksService {

    constructor(private http: HttpClient, private store: Store) { }

    getTodoList$: Observable<Task[]> = this.http
        .get<Task[]>("http://localhost:3000/todolist")
        .pipe(tap(next => this.store.set('todolist', next)));

    // getTodoList(): Observable<Task[]> {
    //     return this.http
    //         .get<Task[]>("http://localhost:3000/todolist");
    // }

    toggle(event: any) {
        this.http
            .put(`http://localhost:3000/todolist/${event.task.id}`, event.task)
            .subscribe(() => {
                const value = this.store.value.todolist;

                const todolist = value.map((task: Task) => {
                    if (task.id === event.task.id) {
                        return { ...task, ...event.task }
                    }

                    return task;
                });

                this.store.set('todolist', todolist);
            });
    }

    novaTarefa(tarefa: string) {
        const task = {
            nome: tarefa,
            finalizado: false,
            iniciado: false
        };

        this.http.post<Task>('http://localhost:3000/todolist', task)
            .subscribe((response) => {
                const value = this.store.value.todolist;
                value.push(response);

                this.store.set('todolist', value);
            });
    }
}