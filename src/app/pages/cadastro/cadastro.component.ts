import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formularioCadastro: FormGroup;
  inputComoPassword: boolean;

  constructor(private fb: FormBuilder, public Router: Router) { }

  ngOnInit(): void {
    this.formularioCadastro = this.fb.group({
      bairro: ['', Validators.compose([Validators.required])],
      cep: ['', Validators.compose([Validators.required])],
      cpf: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.email])],
      logradouro: ['', Validators.compose([Validators.required])],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      numero: ['', Validators.compose([Validators.required])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      telefone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(11)])],
    })
    this.inputComoPassword = true;
  }

  fazerCadastro() {
    this.Router.navigate(["/home"]);
  }

}
