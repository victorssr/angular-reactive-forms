import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Task } from '../../models/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styles: [
  ]
})
export class TasksIniciadasComponent implements OnInit {

  todoList$: Observable<Task[]>;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.todoList$ = this.tasksService.getTodoList$;
  }

}
