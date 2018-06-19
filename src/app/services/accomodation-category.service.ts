import { Injectable } from '@angular/core';
import { AccomodationCategory } from '../model/accomodation-category';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AccomodationCategoryService extends AbstractService<AccomodationCategory, number> {

  constructor(protected http: HttpClient, protected auth: AuthService, protected router: Router) {
    super(http, 'accomodationCategory', auth);
  }
}
