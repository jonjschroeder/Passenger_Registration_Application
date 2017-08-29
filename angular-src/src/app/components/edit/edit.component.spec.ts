/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    // test bed - configures the test.  Make a dynamic module and pull in all the pieces we need.
    TestBed.configureTestingModule({
      declarations: [ EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //instance of the component

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    // ng oninit will fire - watch out because you can have ng oninit a second twice.  
    //best to remove and call it in the it function 
    
  });
  //tests
  it('should create', () => {
    var expectedArg = { any : jasmine.any(String), foo : 'fuu' };
    //Replace ngOnInit with a spy
    //spy function wraps ngOnInit
        spyOn(component, 'ngOnInit')
      .and.callThrough();
    fixture.detectChanges();
    // expect(component).toBeTruthy();
    expect(component.ngOnInit).toHaveBeenCalledWith(expectedArg)
  });
});
