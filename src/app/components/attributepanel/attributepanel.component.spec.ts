import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributepanelComponent } from './attributepanel.component';

describe('AttributepanelComponent', () => {
  let component: AttributepanelComponent;
  let fixture: ComponentFixture<AttributepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
