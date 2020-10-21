import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  inputComoPassword: boolean;

  constructor(private fb: FormBuilder, public Router: Router) { }

  ngOnInit(): void {
    this.formularioLogin = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
    this.inputComoPassword = true;
  }

  fazerLogin() {
    this.Router.navigate(["/home"]);
  }

}
