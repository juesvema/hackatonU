import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekInformationComponent } from './week-information.component';

describe('WeekInformationComponent', () => {
  let component: WeekInformationComponent;
  let fixture: ComponentFixture<WeekInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
