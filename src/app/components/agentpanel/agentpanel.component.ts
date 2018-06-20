import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../services/agent.service';
import { Agent } from '../../model/agent';
import { AgentApprove } from '../../model/agent-approve';
import { HelperFunctions } from '../../shared/util/helper-functions';
import { ListItem } from '../../shared/model/list-item';

@Component({
  selector: 'app-agentpanel',
  templateUrl: './agentpanel.component.html',
  styleUrls: ['./agentpanel.component.css']
})
export class AgentpanelComponent implements OnInit {

  private agentList: Agent[];
  private agentToSend = new AgentApprove(null, null);
  private activeAgent = new Agent(null,null,null,null,null,null,null,null,null,null);

  constructor(protected service: AgentService) { }

  ngOnInit() {
    this.service.getAllDeactivated()
      .subscribe(resp => {
        this.agentList = resp['responseBody'];
        console.log(this.agentList);
      })
  }

  onAgentClick(agent: ListItem) {
    this.activeAgent = agent.relatedItem;
    this.agentToSend = new AgentApprove(this.activeAgent.id, null);
  }

  convertToListItem(array) {
    return HelperFunctions.createListItems(this.agentList, [], ['username']);
  }

  approve() {
    this.service.activateAgent(this.agentToSend)
      .subscribe(resp => {
        if(resp['success']) {
          this.agentList.splice(this.agentList.indexOf(resp['responseBody']), 1);
        }
      })
  }
}
