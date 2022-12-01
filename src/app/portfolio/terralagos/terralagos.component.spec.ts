import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerralagosComponent } from './terralagos.component';

describe('TerralagosComponent', () => {
  let component: TerralagosComponent;
  let fixture: ComponentFixture<TerralagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerralagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerralagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
