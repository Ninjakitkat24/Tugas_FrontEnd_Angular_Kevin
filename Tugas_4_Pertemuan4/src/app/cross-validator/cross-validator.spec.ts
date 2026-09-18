import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrossValidator } from './cross-validator';

describe('CrossValidator', () => {
  let component: CrossValidator;
  let fixture: ComponentFixture<CrossValidator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossValidator],
    }).compileComponents();

    fixture = TestBed.createComponent(CrossValidator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
