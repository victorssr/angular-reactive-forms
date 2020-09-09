import { Component } from '@angular/core';
import { ItemMenu } from './models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  itensMenu: ItemMenu[] = [{
    name: 'Home',
    link: '/home',
    admin: false,
    exact: true
  }, {
    name: 'Cadastro',
    link: '/cadastro',
    admin: true,
    exact: true
  }, {
    name: 'Sobre',
    link: '/sobre',
    admin: false,
    exact: true
  }, {
    name: 'Produto',
    link: '/produto',
    admin: false,
    exact: true
  }];

}
