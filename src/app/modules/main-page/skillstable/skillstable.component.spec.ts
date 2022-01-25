import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillstableComponent } from './skillstable.component';

describe('SkillstableComponent', () => {
  let component: SkillstableComponent;
  let fixture: ComponentFixture<SkillstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
