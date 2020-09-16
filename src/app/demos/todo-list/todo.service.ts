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
}