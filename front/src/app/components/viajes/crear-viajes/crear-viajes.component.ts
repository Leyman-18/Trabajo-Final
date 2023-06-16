import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ViajesI } from 'src/app/models/viaje';
import { ViajesService } from 'src/app/services/viajes.service';
import { ViajerosI } from 'src/app/models/viajeros';
import { ViajerosService } from 'src/app/services/viajeros.service';

@Component({
  selector: 'app-crear-viajes',
  templateUrl: './crear-viajes.component.html',
  styleUrls: ['./crear-viajes.component.css']
})
export class CrearViajesComponent implements OnInit{
  viajeros : ViajerosI[]=[];
  form: FormGroup = this.formBuilder.group({
    numeroPlazas: ['',[Validators.required]],
    frv: ['',[Validators.required]],
    idViajero:['',[Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private viajesService: ViajesService,
    private viajerosService: ViajerosService,
    private router: Router,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.getViajeros();
  }

  onSubmit():void{
    const formValue: ViajesI = this.form.value;
    console.log(formValue);
    this.viajesService.createViajes(formValue).subscribe(()=>{
      setTimeout(()=>{
        this.messageService.add({severity:'succes', summary:'Notificacion',detail:'Viaje Creada', life: 5000});
      }, 0);
      this.router.navigateByUrl('viajes');
    },
    err => {
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    );
  }

  getViajeros(){
    this.viajerosService.getAllViajeros().subscribe({next: (data)=>{
      this.viajeros = data.viajeros
      console.log(this.viajeros)
    }})
  }

  cancel(){
    this.router.navigateByUrl('/viajes');
  }

  get numeroPlazas() {return this.form.get('numeroPlazas');}
  get frv() {return this.form.get('frv');}
  get idViajero() {return this.form.get('idViajero');}
}
