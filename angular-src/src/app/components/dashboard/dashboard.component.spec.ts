/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import 'rxjs/Rx'

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let fakeService:any;



  beforeEach(async(() => {
    fakeService = {
      getInfo: ()=> Observable.of('hello')
    }
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should add 1+1`, ()=>{
    expect(1+1).toEqual(2)
  })
  it(`should have a title of Passenger Registration`, ()=>{
    expect(component.title).toEqual('Dashboard');
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should bring back expected information when initialized', ()=>{
    component.ngOnInit();
    expect(fixture.detectChanges()).toEqual('hello')
  })
});
