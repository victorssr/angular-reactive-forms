import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: [
  ]
})
export class TasksComponent implements OnInit {

  todoList$: Observable<Task[]>;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.todoList$ = this.tasksService.getTodoList$;
  }

}
