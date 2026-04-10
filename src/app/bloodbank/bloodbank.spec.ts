import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloodbank } from './bloodbank';

describe('Bloodbank', () => {
  let component: Bloodbank;
  let fixture: ComponentFixture<Bloodbank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bloodbank],
    }).compileComponents();

    fixture = TestBed.createComponent(Bloodbank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
