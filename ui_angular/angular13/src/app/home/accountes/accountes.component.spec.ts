import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountesComponent } from './accountes.component';

describe('AccountesComponent', () => {
  let component: AccountesComponent;
  let fixture: ComponentFixture<AccountesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
