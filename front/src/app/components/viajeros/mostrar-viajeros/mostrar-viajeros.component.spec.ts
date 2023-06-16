import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarViajerosComponent } from './mostrar-viajeros.component';

describe('MostrarViajerosComponent', () => {
  let component: MostrarViajerosComponent;
  let fixture: ComponentFixture<MostrarViajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarViajerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarViajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
