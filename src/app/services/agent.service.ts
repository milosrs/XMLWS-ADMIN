import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Agent } from '../model/agent';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgentService extends AbstractService<Agent, number>{

  private agentInfo = {
    username: null,
    password: null,
    
  }

  constructor(protected http: HttpClient, protected router: Router, protected auth: AuthService) {
    super(http, 'agents', auth);
   }

   init() {

   }
}
