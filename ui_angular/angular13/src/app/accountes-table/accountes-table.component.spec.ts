import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountesTableComponent } from './accountes-table.component';

describe('AccountesTableComponent', () => {
  let component: AccountesTableComponent;
  let fixture: ComponentFixture<AccountesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
