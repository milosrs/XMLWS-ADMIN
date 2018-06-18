import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentpanelComponent } from './agentpanel.component';

describe('AgentpanelComponent', () => {
  let component: AgentpanelComponent;
  let fixture: ComponentFixture<AgentpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
