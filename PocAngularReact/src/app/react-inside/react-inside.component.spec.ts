/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReactInsideComponent } from './react-inside.component';

describe('ReactInsideComponent', () => {
  let component: ReactInsideComponent;
  let fixture: ComponentFixture<ReactInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
