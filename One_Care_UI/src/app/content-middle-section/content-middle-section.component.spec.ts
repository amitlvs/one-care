import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMiddleSectionComponent } from './content-middle-section.component';

describe('ContentMiddleSectionComponent', () => {
  let component: ContentMiddleSectionComponent;
  let fixture: ComponentFixture<ContentMiddleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMiddleSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMiddleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
