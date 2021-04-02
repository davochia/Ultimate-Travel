import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthCardComponent } from './forth-card.component';

describe('ForthCardComponent', () => {
  let component: ForthCardComponent;
  let fixture: ComponentFixture<ForthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
