import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitarybasestableComponent } from './militarybasestable.component';

describe('MilitarybasestableComponent', () => {
  let component: MilitarybasestableComponent;
  let fixture: ComponentFixture<MilitarybasestableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitarybasestableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitarybasestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
