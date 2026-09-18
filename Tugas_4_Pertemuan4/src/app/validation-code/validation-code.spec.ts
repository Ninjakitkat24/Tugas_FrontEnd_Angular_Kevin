import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationCode } from './validation-code';

describe('ValidationCode', () => {
  let component: ValidationCode;
  let fixture: ComponentFixture<ValidationCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationCode],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
