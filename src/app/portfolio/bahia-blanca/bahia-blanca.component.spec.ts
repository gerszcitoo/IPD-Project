import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahiaBlancaComponent } from './bahia-blanca.component';

describe('BahiaBlancaComponent', () => {
  let component: BahiaBlancaComponent;
  let fixture: ComponentFixture<BahiaBlancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BahiaBlancaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BahiaBlancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
