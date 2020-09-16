import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  list: Task[];

  @Output()
  toggle = new EventEmitter<any>();

  toggleItem(index: number, action: string) {
    let task = this.list[index];

    switch (action) {
      case 'iniciar':
        task.finalizado = false;
        task.iniciado = true;
        break;
      case 'cancelar':
        task.finalizado = false;
        task.iniciado = false;
        break;
      case 'finalizar':
        task.finalizado = true;
        task.iniciado = true;
        break;
      case 'retomar':
        task.finalizado = false;
        task.iniciado = true;
        break;
    }

    this.toggle.emit({
      task: { ...task }
    })
  }

}
