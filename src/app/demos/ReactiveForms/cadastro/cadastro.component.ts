import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})

export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      confirmacaoSenha: [''],
    });
  }

  adicionarUsuario() {
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);

    console.log(this.usuario);
  }

}
