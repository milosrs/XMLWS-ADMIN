import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoesthisworkComponent } from './doesthiswork.component';

describe('DoesthisworkComponent', () => {
  let component: DoesthisworkComponent;
  let fixture: ComponentFixture<DoesthisworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoesthisworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoesthisworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
