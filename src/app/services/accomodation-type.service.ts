import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { AccomodationType } from '../model/accomodation-type';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccomodationTypeService extends AbstractService<AccomodationType, number> {

  constructor(protected http: HttpClient, protected auth: AuthService, protected router: Router) {
    super(http, 'accomodationType', auth);
  }

}
