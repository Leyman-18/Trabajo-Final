import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ViajesI } from 'src/app/models/viaje';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-mostrar-viajes',
  templateUrl: './mostrar-viajes.component.html',
  styleUrls: ['./mostrar-viajes.component.css']
})
export class MostrarViajesComponent {
  viajes : ViajesI[]=[];
  constructor(
    private viajesService: ViajesService,
    private router: Router,
    private messageService: MessageService
  ) {

  }
  ngOnInit(): void {
    this.mostrarViajes();
  }

  mostrarViajes(){
    this.viajesService.getAllViajes().subscribe({next: (data)=>{
      this.viajes = data.viajes
      console.log(this.viajes)
    }})
  }

  eliminarViajes(id: number){
    this.router.navigateByUrl('/viajes')
    this.viajesService.deleteViajes(id).subscribe(() => {
      this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Viaje Eliminado', life:5000});
      this.mostrarViajes();
    },
    err => {
      console.log(err);
      console.log('No se ha eliminado correctamente')
    }
    );
  }
}
