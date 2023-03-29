import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationlistComponent } from './evaluationlist.component';

describe('EvaluationlistComponent', () => {
  let component: EvaluationlistComponent;
  let fixture: ComponentFixture<EvaluationlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
