import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuelBelgranoComponent } from './manuel-belgrano.component';

describe('ManuelBelgranoComponent', () => {
  let component: ManuelBelgranoComponent;
  let fixture: ComponentFixture<ManuelBelgranoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuelBelgranoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuelBelgranoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
