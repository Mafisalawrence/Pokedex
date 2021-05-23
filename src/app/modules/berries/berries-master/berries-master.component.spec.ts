import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesMasterComponent } from './berries-master.component';

describe('BerriesMasterComponent', () => {
  let component: BerriesMasterComponent;
  let fixture: ComponentFixture<BerriesMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerriesMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerriesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
