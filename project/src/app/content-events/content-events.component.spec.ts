import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEventsComponent } from './content-events.component';

describe('ContentEventsComponent', () => {
  let component: ContentEventsComponent;
  let fixture: ComponentFixture<ContentEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentEventsComponent]
    });
    fixture = TestBed.createComponent(ContentEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
