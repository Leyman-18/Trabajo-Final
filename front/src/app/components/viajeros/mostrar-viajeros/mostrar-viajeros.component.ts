import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ViajerosI } from 'src/app/models/viajeros';
import { ViajerosService } from 'src/app/services/viajeros.service';

@Component({
  selector: 'app-mostrar-viajeros',
  templateUrl: './mostrar-viajeros.component.html',
  styleUrls: ['./mostrar-viajeros.component.css']
})
export class MostrarViajerosComponent implements OnInit{
  viajeros : ViajerosI[]=[];
  constructor(
    private viajerosService: ViajerosService,
    private router: Router,
    private messageService: MessageService
  ) {

  }
  ngOnInit(): void {
    this.mostrarViajero();
  }

  mostrarViajero(){
    this.viajerosService.getAllViajeros().subscribe({next: (data)=>{
      this.viajeros = data.viajeros
      console.log(this.viajeros)
    }})
  }

  eliminarViajero(id: number){
    this.router.navigateByUrl('/viajeros')
    this.viajerosService.deleteViajeros(id).subscribe(() => {
      this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Viajero Eliminado', life:5000});
      this.mostrarViajero();
    },
    err => {
      console.log(err);
      console.log('No se ha eliminado correctamente')
    }
    );
  }
}
