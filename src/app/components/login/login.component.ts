import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  form!: FormGroup;
  error: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginServiceService,
    private dataService: DataService,
    private router: Router
  ) {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  login() {
    console.log(this.form.value);
    this.loginService.login(this.form.value).subscribe(
      resp => {
        this.loginService.setToken( resp.session.access_token );
        this.loginService.getUserInfo( resp.session.access_token )
          .subscribe( user => console.log( user ) );
        this.dataService.isLogged = true;
        this.router.navigate(['home']);
      },
      error => {
        this.error = true;
      }
    )
  }


}
