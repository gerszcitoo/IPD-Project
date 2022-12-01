import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopezDelgadoComponent } from './lopez-delgado.component';

describe('LopezDelgadoComponent', () => {
  let component: LopezDelgadoComponent;
  let fixture: ComponentFixture<LopezDelgadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LopezDelgadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LopezDelgadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
