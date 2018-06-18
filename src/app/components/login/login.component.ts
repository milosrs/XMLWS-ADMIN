import { Component, OnInit, NgModule, EventEmitter, Input, Output } from '@angular/core';
import { HelperFunctions } from '../../shared/util/helper-functions';
import { Message } from '../../shared/model/message';
import {Router, ActivatedRoute} from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../../services/auth.service';
import { AuthenticationRequest } from '../../model/authentication-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  implements OnInit {
  private errorMessage = null;
  private logInfo = {
    uname: '',
    password: ''
  };
  private returnUrl: string;

  constructor(private auth: AuthService, 
              private router : Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  clearAllInfo() {
    this.logInfo.uname = '';
    this.logInfo.password = '';
  }

  tryLogin() {
    if (!HelperFunctions.containsEmptyValues(this.logInfo)) {
      const authRequest = new AuthenticationRequest(this.logInfo.uname, this.logInfo.password);
      this.auth.login(authRequest, this.returnUrl);
    }
  }

  hideError() {
    this.errorMessage = null;
  }
}
