import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionLandingComponent } from './auction-landing.component';

describe('AuctionLandingComponent', () => {
  let component: AuctionLandingComponent;
  let fixture: ComponentFixture<AuctionLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
