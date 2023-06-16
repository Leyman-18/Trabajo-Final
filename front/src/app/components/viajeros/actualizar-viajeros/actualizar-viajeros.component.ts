import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ViajerosI } from 'src/app/models/viajeros';
import { ViajerosService } from 'src/app/services/viajeros.service';

@Component({
  selector: 'app-actualizar-viajeros',
  templateUrl: './actualizar-viajeros.component.html',
  styleUrls: ['./actualizar-viajeros.component.css']
})
export class ActualizarViajerosComponent implements OnInit{
  id: number =0;

  form: FormGroup = this.formBuilder.group({
    id: [''],
    nombreCliente: ['',[Validators.required]],
    direccionCliente: ['',[Validators.required]],
    telefonoCliente:['',[Validators.required]],
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private viajerosService: ViajerosService,
    private router: Router,
    private messageService: MessageService
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getViajero(this.id);
  }

  getViajero(id: number){
    this.viajerosService.getOneViajeros(id).subscribe({next: (data)=>{
      this.form.setValue(data.viajeros)
    }})
  }

  onSubmit(){
    const formValue: ViajerosI = this.form.value;
    const id: number = this.form.value.id;
    this.viajerosService.updateViajeros(id, formValue).subscribe(()=>{
      setTimeout(()=>{
        this.messageService.add({severity: 'success', summary: 'Notificacion',detail: 'Viajero Actualizado', life:5000});
      }, 0);
      this.router.navigateByUrl('viajeros');
    },
    err => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/viajeros');
  }

  get nombreCliente() {return this.form.get('nombreCliente');}
  get direccionCliente() {return this.form.get('direccionCliente');}
  get telefonoCliente() {return this.form.get('telefonoCliente');}
}

