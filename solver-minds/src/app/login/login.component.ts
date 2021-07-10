import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(private route: Router) { }

  ngOnInit() {
  }

  signin(value: any) {
    value.email == localStorage.getItem("email") && value.password == localStorage.getItem("password") ?
      this.route.navigateByUrl('/home') : value.email == 'admin@gmail.com' && value.password == 'admin' ? this.route.navigateByUrl('/home') : alert('Invalid user')
  }

}
