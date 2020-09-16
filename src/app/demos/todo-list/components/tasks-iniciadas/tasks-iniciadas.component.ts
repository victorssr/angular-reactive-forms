import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styles: [
  ]
})
export class TasksIniciadasComponent implements OnInit {

  todoList$: Observable<Task[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.todoList$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => task.iniciado && !task.finalizado))
      );
  }

}
