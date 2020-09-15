import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styles: [
  ]
})
export class TasksFinalizadasComponent implements OnInit {

  todoList$: Observable<Task[]>;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.todoList$ = this.tasksService.getTodoList$;
  }

}
