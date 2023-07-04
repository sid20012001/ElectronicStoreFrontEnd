import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualcartComponent } from './actualcart.component';

describe('ActualcartComponent', () => {
  let component: ActualcartComponent;
  let fixture: ComponentFixture<ActualcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
