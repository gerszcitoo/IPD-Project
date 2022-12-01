import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenalesComponent } from './arenales.component';

describe('ArenalesComponent', () => {
  let component: ArenalesComponent;
  let fixture: ComponentFixture<ArenalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArenalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
