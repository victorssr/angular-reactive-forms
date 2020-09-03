import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Usuario } from './models/usuario';
import { CustomValidators } from 'ng2-validation';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { ValidationMessages, GenericValidator, DisplayMessage } from './generic-form-validation';
import { Observable, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})

export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: String;
  masks = utilsBr.MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: 'Informe o seu nome',
        rangeLength: 'O nome deve ter entre 5 a 300 caracteres'
      },
      cpf: {
        required: 'Informe o seu CPF',
        cpf: 'Informe um CPF válido'
      },
      email: {
        required: 'Informe o seu e-mail',
        email: 'Informe um e-mail válido'
      },
      senha: {
        required: 'Informe a sua senha',
        minlength: 'A sua senha deve ter no mínimo 6 caracteres'
      },
      confirmacaoSenha: {
        required: 'Confirme a sua senha',
        equalTo: 'Senhas não conferem'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

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

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    });
  }

  adicionarUsuario() {
    if (!this.cadastroForm.valid) {
      this.formResult = "Formulário inválido!";
      return;
    }

    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
    this.formResult = JSON.stringify(this.cadastroForm.value);
  }

}
