import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcosSastreComponent } from './marcos-sastre.component';

describe('MarcosSastreComponent', () => {
  let component: MarcosSastreComponent;
  let fixture: ComponentFixture<MarcosSastreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcosSastreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcosSastreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
