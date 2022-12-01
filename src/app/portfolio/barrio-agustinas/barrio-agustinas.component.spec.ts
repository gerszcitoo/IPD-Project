import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrioAgustinasComponent } from './barrio-agustinas.component';

describe('BarrioAgustinasComponent', () => {
  let component: BarrioAgustinasComponent;
  let fixture: ComponentFixture<BarrioAgustinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrioAgustinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrioAgustinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
