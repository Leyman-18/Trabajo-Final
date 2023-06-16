import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViajerosComponent } from './crear-viajeros.component';

describe('CrearViajerosComponent', () => {
  let component: CrearViajerosComponent;
  let fixture: ComponentFixture<CrearViajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearViajerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearViajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
