import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio1vistaComponent } from './ejercicio1vista.component';

describe('Ejercicio1vistaComponent', () => {
  let component: Ejercicio1vistaComponent;
  let fixture: ComponentFixture<Ejercicio1vistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio1vistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio1vistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
