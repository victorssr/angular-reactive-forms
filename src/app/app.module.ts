import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { rootRouterConfig } from './app.routes';
import { HttpClientModule } from "@angular/common/http";
import { CadastroComponent } from './demos/ReactiveForms/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    SobreComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig)]
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
