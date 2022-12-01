import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValdevezComponent } from './valdevez.component';

describe('ValdevezComponent', () => {
  let component: ValdevezComponent;
  let fixture: ComponentFixture<ValdevezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValdevezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValdevezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
