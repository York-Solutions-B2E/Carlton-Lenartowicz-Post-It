import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplepostComponent } from './multiplepost.component';

describe('MultiplepostComponent', () => {
  let component: MultiplepostComponent;
  let fixture: ComponentFixture<MultiplepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
