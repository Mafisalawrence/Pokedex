import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesDetailsComponent } from './berries-details.component';

describe('BerriesDetailsComponent', () => {
  let component: BerriesDetailsComponent;
  let fixture: ComponentFixture<BerriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerriesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
