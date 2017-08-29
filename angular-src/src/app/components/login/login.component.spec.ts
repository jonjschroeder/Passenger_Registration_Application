/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LoginComponent } from './login.component';
import {AuthService} from "../../services/auth.service";

class MockAuthService { 
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;


  beforeEach(() => {
    // service = new MockAuthService();
    // component = new LoginComponent(service);
  });
  afterEach(() => {
    service = null;
    component = null;
  });


  it('canLogin returns false when the user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    localStorage.setItem('token', '12345'); 
    expect(component.needsLogin()).toBeFalsy();
});
  });

