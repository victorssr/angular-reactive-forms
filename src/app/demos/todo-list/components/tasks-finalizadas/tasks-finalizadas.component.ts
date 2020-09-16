import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styles: [
  ]
})
export class TasksFinalizadasComponent implements OnInit {

  todoList$: Observable<Task[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.todoList$ = this.store.getTodoList()
    .pipe(map(todolist => todolist.filter(task => task.finalizado)));
  }

}
