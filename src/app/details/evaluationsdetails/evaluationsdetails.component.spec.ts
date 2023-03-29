import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsdetailsComponent } from './evaluationsdetails.component';

describe('EvaluationsdetailsComponent', () => {
  let component: EvaluationsdetailsComponent;
  let fixture: ComponentFixture<EvaluationsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationsdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
