import { Component, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable, Subscription } from 'rxjs';
import { Task } from '../../models/task';
import { Store } from '../../todo.store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: [
  ]
})
export class TasksComponent implements OnInit, OnDestroy {

  todoList$: Observable<Task[]>;
  subscription: Subscription;

  constructor(private tasksService: TasksService, private store: Store) { }

  ngOnInit(): void {
    this.subscription = this.tasksService.getTodoList$.subscribe();

    this.todoList$ = this.store.getTodoList()
      .pipe(map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
