import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ViajerosI } from 'src/app/models/viajeros';
import { ViajerosService } from 'src/app/services/viajeros.service';

@Component({
  selector: 'app-crear-viajeros',
  templateUrl: './crear-viajeros.component.html',
  styleUrls: ['./crear-viajeros.component.css']
})
export class CrearViajerosComponent implements OnInit{
  form: FormGroup = this.formBuilder.group({
    nombreCliente: ['',[Validators.required]],
    direccionCliente: ['',[Validators.required]],
    telefonoCliente:['',[Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private viajerosService: ViajerosService,
    private router: Router,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {

  }

  onSubmit():void{
    const formValue: ViajerosI = this.form.value;
    console.log(formValue);
    this.viajerosService.createViajeros(formValue).subscribe(()=>{
      setTimeout(()=>{
        this.messageService.add({severity:'succes', summary:'Notificacion',detail:'Viajero Creada', life: 5000});
      }, 0);
      this.router.navigateByUrl('viajeros');
    },
    err => {
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    );
  }

  cancel(){
    this.router.navigateByUrl('/viajeros');
  }

  get nombreCliente() {return this.form.get('nombreCliente');}
  get direccionCliente() {return this.form.get('direccionCliente');}
  get telefonoCliente() {return this.form.get('telefonoCliente');}
}
