import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo5Component } from './ejemplo5.component';

describe('Ejemplo5Component', () => {
  let component: Ejemplo5Component;
  let fixture: ComponentFixture<Ejemplo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
