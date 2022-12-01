import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelValleIberluceaComponent } from './del-valle-iberlucea.component';

describe('DelValleIberluceaComponent', () => {
  let component: DelValleIberluceaComponent;
  let fixture: ComponentFixture<DelValleIberluceaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelValleIberluceaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelValleIberluceaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
