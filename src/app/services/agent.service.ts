import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Agent } from '../model/agent';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AgentApprove } from '../model/agent-approve';

@Injectable({
  providedIn: 'root'
})
export class AgentService extends AbstractService<Agent, number>{

  private agentInfo = {
    name: null,
    surname: null,
    pmb: null
  };

  constructor(protected http: HttpClient, protected router: Router, protected auth: AuthService) {
    super(http, 'agents', auth);
   }

   init() {

   }

   getAllActive() {
    const headers = this.auth.getJSONAuthHeader();

    return this.http.get(this.actionUrl + '/getByActive/' + true, {headers:headers});
   }

   getAllDeactivated() {
    const headers = this.auth.getJSONAuthHeader();

    return this.http.get(this.actionUrl + '/getByActive/' + false, {headers:headers});
   }

   activateAgent(approval: AgentApprove) {
    const headers = this.auth.getJSONAuthHeader();

    return this.http.post(this.actionUrl + '/approve', approval, {headers:headers});
   }

   deactivateAgent(decline: AgentApprove) {
    const headers = this.auth.getJSONAuthHeader();

    return this.http.post(this.actionUrl + '/decline', decline, {headers:headers});
   }
}
