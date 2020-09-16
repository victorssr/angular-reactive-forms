import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable, Subscription } from 'rxjs';
import { Task } from '../../models/task';
import { Store } from '../../todo.store';
import { map } from 'rxjs/operators';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: [
  ]
})
export class TasksComponent implements OnInit, OnDestroy {

  txtTarefa: string;
  todoList$: Observable<Task[]>;
  subscription: Subscription;

  constructor(
    private tasksService: TasksService,
    private store: Store,
    private titleCasePipe: TitleCasePipe
  ) { }

  ngOnInit(): void {
    this.subscription = this.tasksService.getTodoList$.subscribe();

    this.todoList$ = this.store.getTodoList()
      .pipe(map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onToggle(event) {
    this.tasksService.toggle(event);
  }

  novaTarefa() {
    this.tasksService.novaTarefa(this.titleCasePipe.transform(this.txtTarefa));
    this.txtTarefa = "";
  }
}
