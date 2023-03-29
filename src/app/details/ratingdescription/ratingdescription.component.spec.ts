import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingdescriptionComponent } from './ratingdescription.component';

describe('RatingdescriptionComponent', () => {
  let component: RatingdescriptionComponent;
  let fixture: ComponentFixture<RatingdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingdescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
