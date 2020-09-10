import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HttpClientModule } from "@angular/common/http";
import { CadastroComponent } from './demos/ReactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthAppGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipe/filmes/filmes.component';
import { FileSizePipe } from './demos/pipe/filmes/filesize.pipe';
import { ImageFormatterPipe } from './demos/pipe/filmes/image.pipe';
import { BarModule } from './demos/bar-di-zones/bar.module';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    NotFoundComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormatterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule,
    NgBrazil,
    TextMaskModule,
    NavegacaoModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1234,
      unidadeToken: 'A901LKASDO0P21LDQ9021M'
    })
  ],
  providers: [
    AuthAppGuard,
    CadastroGuard,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
