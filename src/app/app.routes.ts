import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/ReactiveForms/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthAppGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipe/filmes/filmes.component';
import { BarDiZonesComponent } from './demos/bar-di-zones/bar-di-zones.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
    {
        path: 'produto',
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module').then(m => m.ProdutoModule),
        canLoad: [AuthAppGuard],
        canActivate: [AuthAppGuard]
    },
    { path: 'bar', component: BarDiZonesComponent },
    { path: 'filmes', component: FilmesComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }