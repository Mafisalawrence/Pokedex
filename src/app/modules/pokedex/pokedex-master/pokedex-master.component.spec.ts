import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexMasterComponent } from './pokedex-master.component';

describe('PokedexMasterComponent', () => {
  let component: PokedexMasterComponent;
  let fixture: ComponentFixture<PokedexMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
