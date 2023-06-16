import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarViajerosComponent } from './actualizar-viajeros.component';

describe('ActualizarViajerosComponent', () => {
  let component: ActualizarViajerosComponent;
  let fixture: ComponentFixture<ActualizarViajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarViajerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarViajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
