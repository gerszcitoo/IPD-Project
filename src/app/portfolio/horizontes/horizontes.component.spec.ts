import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontesComponent } from './horizontes.component';

describe('HorizontesComponent', () => {
  let component: HorizontesComponent;
  let fixture: ComponentFixture<HorizontesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
