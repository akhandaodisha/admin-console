import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Login';
  pageSubtitle = 'Only admins are allowed to login';
  returnUrl: string;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    public loginService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private af: AngularFireAuth) {
    this.loginForm = fb.group({
      username: [''],
      password: ['']
    });
  }

  login({ username, password }: { username: string, password: string }) {
    this.authService.loginEmail(username, password)
    .then(() => { this.router.navigateByUrl(this.returnUrl); });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
