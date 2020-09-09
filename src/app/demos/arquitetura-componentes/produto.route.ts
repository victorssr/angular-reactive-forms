import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoAppComponent } from "./produto.app.component";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoResolve } from "./services/produto.resolve";

const routerConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [
            { path: '', redirectTo: 'todos' },
            {
                path: ':status',
                component: ProdutoDashboardComponent,
                resolve: {
                    produtos: ProdutoResolve
                },
                data: {
                    teste: 'Informação'
                }
            },
            { path: 'editar/:id', component: EditarProdutoComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routerConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class ProdutoRoutingModule { }