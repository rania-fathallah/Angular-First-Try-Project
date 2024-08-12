import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentReactiveFormComponentComponent } from './edit-component-reactive-form-component.component';

describe('EditComponentReactiveFormComponentComponent', () => {
  let component: EditComponentReactiveFormComponentComponent;
  let fixture: ComponentFixture<EditComponentReactiveFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponentReactiveFormComponentComponent]
    });
    fixture = TestBed.createComponent(EditComponentReactiveFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
