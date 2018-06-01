import { Component, OnInit, NgModule, EventEmitter, Input, Output } from '@angular/core';
import { HelperFunctions } from '../../shared/util/helper-functions';
import { Message } from '../../shared/model/message';
import {Router} from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';

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

  constructor(private router : Router) {
  }

  ngOnInit() {
  }

  /*public btnClick(): void {
    const msg = new Message('foo', 'bar');
    this.sendMessage(msg);
  }*/

  clearAllInfo() {
    this.logInfo.uname = '';
    this.logInfo.password = '';
  }

  tryLogin() {
    if (!HelperFunctions.containsEmptyValues(this.logInfo)) {
      this.errorMessage = null;
      const msg = new Message('login', JSON.stringify(this.logInfo), null);
    }
  }

  hideError() {
    this.errorMessage = null;
  }
}
