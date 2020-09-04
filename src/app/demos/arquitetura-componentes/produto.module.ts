import { NgModule } from "@angular/core";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { CommonModule } from "@angular/common";
import { ProdutoRoutingModule } from "./produto.route";
import { ProdutoDetalhesComponent } from "./componentes/produto-detalhe.component";
import { ProdutoCountComponent } from "./componentes/produto-count.component";

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoDetalhesComponent,
        ProdutoCountComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: [ ]
})
export class ProdutoModule { }