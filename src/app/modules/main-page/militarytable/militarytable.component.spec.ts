import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitarytableComponent } from './militarytable.component';

describe('MilitarytableComponent', () => {
  let component: MilitarytableComponent;
  let fixture: ComponentFixture<MilitarytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitarytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitarytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
