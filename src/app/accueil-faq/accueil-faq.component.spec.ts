import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilFaqComponent } from './accueil-faq.component';

describe('AccueilFaqComponent', () => {
  let component: AccueilFaqComponent;
  let fixture: ComponentFixture<AccueilFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
