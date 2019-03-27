import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterFinalComponent } from './quarter-final.component';

describe('QuarterFinalComponent', () => {
  let component: QuarterFinalComponent;
  let fixture: ComponentFixture<QuarterFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
