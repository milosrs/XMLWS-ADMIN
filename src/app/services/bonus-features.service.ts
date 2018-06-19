import { Injectable } from '@angular/core';
import { BonusFeatures } from '../model/bonus-features';
import { AbstractService } from './abstract.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BonusFeaturesService extends AbstractService<BonusFeatures, number> {

  constructor(protected http: HttpClient, protected auth: AuthService, protected router: Router) {
    super(http, 'bonusFeatures', auth);
  }

}
