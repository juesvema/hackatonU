import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryLoginComponent } from './entry-login.component';

describe('EntryLoginComponent', () => {
  let component: EntryLoginComponent;
  let fixture: ComponentFixture<EntryLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
