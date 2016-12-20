/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserComponent } from './user.component';
import {UserService} from "./user.service";
import {DataService} from "../data.service";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    dataService = fixture.debugElement.injector.get(DataService);

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
     fixture.detectChanges();
     expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display the user name if user is logged in', () => {
     component.isLoggedIn = true;
     fixture.detectChanges();
     let compiled = fixture.debugElement.nativeElement;
     expect(compiled.querySelector('p').textContent).toContain(component.user.name);
  });

  it('should not display the user name if user is not logged in', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name);
  });

  it('shouldn\'t fetch data successfully if not called async', () =>{
     let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
     fixture.detectChanges();
     expect(component.data).toBe(undefined);
  });

  it('should fetch data successfully if called async', async(() =>{
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    // waiting for a async task to finish and check the result in the callback
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called fakeasync', fakeAsync(() =>{
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    // detect changes AFTER spy
    fixture.detectChanges();
    tick();
    expect(component.data).toBe('Data');
  }));
});
