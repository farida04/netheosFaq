import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFaqComponent } from './liste-faq.component';

describe('ListeFaqComponent', () => {
  let component: ListeFaqComponent;
  let fixture: ComponentFixture<ListeFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
