import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarViajesComponent } from './mostrar-viajes.component';

describe('MostrarViajesComponent', () => {
  let component: MostrarViajesComponent;
  let fixture: ComponentFixture<MostrarViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarViajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
