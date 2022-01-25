import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaininterfaceComponent } from './maininterface.component';

describe('MaininterfaceComponent', () => {
  let component: MaininterfaceComponent;
  let fixture: ComponentFixture<MaininterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaininterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaininterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
