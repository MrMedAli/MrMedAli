import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbuttonintableComponent } from './addbuttonintable.component';

describe('AddbuttonintableComponent', () => {
  let component: AddbuttonintableComponent;
  let fixture: ComponentFixture<AddbuttonintableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbuttonintableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbuttonintableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
