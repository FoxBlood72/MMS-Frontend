import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarisontableComponent } from './garisontable.component';

describe('GarisontableComponent', () => {
  let component: GarisontableComponent;
  let fixture: ComponentFixture<GarisontableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarisontableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarisontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
