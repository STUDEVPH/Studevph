import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSeminarsComponent } from './content-seminars.component';

describe('ContentSeminarsComponent', () => {
  let component: ContentSeminarsComponent;
  let fixture: ComponentFixture<ContentSeminarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentSeminarsComponent]
    });
    fixture = TestBed.createComponent(ContentSeminarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
