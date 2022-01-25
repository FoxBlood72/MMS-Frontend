import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryskillsComponent } from './militaryskills.component';

describe('MilitaryskillsComponent', () => {
  let component: MilitaryskillsComponent;
  let fixture: ComponentFixture<MilitaryskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
