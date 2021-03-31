import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutToursComponent } from './out-tours.component';

describe('OutToursComponent', () => {
  let component: OutToursComponent;
  let fixture: ComponentFixture<OutToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutToursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
