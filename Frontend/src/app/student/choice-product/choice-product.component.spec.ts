import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceProductComponent } from './choice-product.component';

describe('ChoiceProductComponent', () => {
  let component: ChoiceProductComponent;
  let fixture: ComponentFixture<ChoiceProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
