import { NgModule } from "@angular/core";
import { CommonModule, TitleCasePipe } from "@angular/common";
import { TodoComponent } from "./todo.component";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HttpClientModule } from "@angular/common/http";
import { TasksService } from "./todo.service";
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { Store } from "./todo.store";
import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        TodoComponent,
        TodoListComponent,
        TasksComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent
    ],
    exports: [
        TodoComponent,
        TodoListComponent,
        TasksComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent
    ],
    providers: [
        TasksService,
        Store,
        TitleCasePipe
    ]
})
export class TodoModule { }