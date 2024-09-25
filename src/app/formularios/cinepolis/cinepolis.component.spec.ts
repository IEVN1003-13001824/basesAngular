import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CinepolisComponent } from './cinepolis.component';

describe('CinepolisComponent', () => {
  let component: CinepolisComponent;
  let fixture: ComponentFixture<CinepolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinepolisComponent ],
      imports: [ FormsModule ]
    })s
    .compileComponents();

    fixture = TestBed.createComponent(CinepolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total correctly without CINECO discount', () => {
    component.ticketQuantity = 6;
    component.hasCinecoCard = false;
    component.calculateTotal();
    expect(component.total).toBe(61.20); // 6 tickets * 12 = 72 - 15% = 61.20
  });

  it('should apply CINECO discount correctly', () => {
    component.ticketQuantity = 6;
    component.hasCinecoCard = true;
    component.calculateTotal();
    expect(component.total).toBe(55.08); // 61.20 - 10% = 55.08
  });
});

