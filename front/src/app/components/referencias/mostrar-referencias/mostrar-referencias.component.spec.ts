import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarReferenciasComponent } from './mostrar-referencias.component';

describe('MostrarReferenciasComponent', () => {
  let component: MostrarReferenciasComponent;
  let fixture: ComponentFixture<MostrarReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarReferenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
