import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountTableComponent } from './edit-account-table.component';

describe('EditAccountTableComponent', () => {
  let component: EditAccountTableComponent;
  let fixture: ComponentFixture<EditAccountTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccountTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
