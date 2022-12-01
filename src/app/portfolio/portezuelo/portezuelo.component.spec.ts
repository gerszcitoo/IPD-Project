import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortezueloComponent } from './portezuelo.component';

describe('PortezueloComponent', () => {
  let component: PortezueloComponent;
  let fixture: ComponentFixture<PortezueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortezueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortezueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
