import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserManipulatorService extends AbstractService<User, number> {

  constructor(protected http: HttpClient, protected router: Router, protected auth: AuthService) {
    super(http, 'users', auth);
  }

  getByActive(isActive: boolean) {
    const headers = this.auth.getJSONAuthHeader();
    return this.http.get(this.actionUrl + '/getByActive/' + isActive, {headers: headers});
  }

  activate(id: number) {
    const headers = this.auth.getJSONAuthHeader();
    return this.http.put(this.actionUrl + '/activate/' + id, {headers: headers});
  }

  block(id: number) {
    const headers = this.auth.getJSONAuthHeader();
    return this.http.put(this.actionUrl + '/block/' + id, {headers: headers});
  }
}
