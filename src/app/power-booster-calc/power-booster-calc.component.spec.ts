import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBoosterCalcComponent } from './power-booster-calc.component';

describe('PowerBoosterCalcComponent', () => {
  let component: PowerBoosterCalcComponent;
  let fixture: ComponentFixture<PowerBoosterCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBoosterCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBoosterCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
