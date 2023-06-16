import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearViajesComponent } from './crear-viajes.component';

describe('CrearViajesComponent', () => {
  let component: CrearViajesComponent;
  let fixture: ComponentFixture<CrearViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearViajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
