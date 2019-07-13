import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteColorTemplateDrivenComponent } from './favorite-color-template-driven.component';

describe('FavoriteColorTemplateDrivenComponent', () => {
  let component: FavoriteColorTemplateDrivenComponent;
  let fixture: ComponentFixture<FavoriteColorTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteColorTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteColorTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
