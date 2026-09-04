import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mandiri } from './mandiri';

describe('Mandiri', () => {
  let component: Mandiri;
  let fixture: ComponentFixture<Mandiri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mandiri],
    }).compileComponents();

    fixture = TestBed.createComponent(Mandiri);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
