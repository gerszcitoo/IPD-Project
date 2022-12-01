import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombetComponent } from './combet.component';

describe('CombetComponent', () => {
  let component: CombetComponent;
  let fixture: ComponentFixture<CombetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
