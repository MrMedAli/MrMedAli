import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountefromtableComponent } from './add-accountefromtable.component';

describe('AddAccountefromtableComponent', () => {
  let component: AddAccountefromtableComponent;
  let fixture: ComponentFixture<AddAccountefromtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccountefromtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountefromtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
