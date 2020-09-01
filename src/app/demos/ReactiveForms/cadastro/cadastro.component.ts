import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';
import { CustomValidators } from 'ng2-validation';
import { MASKS, NgBrazilValidators } from 'ng-brazil';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})

export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: String;

  masks = MASKS;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let senha = new FormControl('', [Validators.required, Validators.minLength(6)]);
    let confirmacaoSenha = new FormControl('', [Validators.required, CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, CustomValidators.rangeLength([5, 300])]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      confirmacaoSenha: confirmacaoSenha,
    });
  }

  adicionarUsuario() {
    if (!this.cadastroForm.valid) {
      console.log("Formulário inválido!");
      return;
    }

    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
    this.formResult = this.cadastroForm.value;
    console.log(this.usuario);
  }

}
