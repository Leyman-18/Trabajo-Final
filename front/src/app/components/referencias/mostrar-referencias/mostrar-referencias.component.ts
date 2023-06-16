import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ReferenciaI } from 'src/app/models/referencia';
import { ReferenciaService } from 'src/app/services/referencias.service';

@Component({
  selector: 'app-mostrar-referencias',
  templateUrl: './mostrar-referencias.component.html',
  styleUrls: ['./mostrar-referencias.component.css']
})
export class MostrarReferenciasComponent implements OnInit{
  referencia : ReferenciaI[]=[];
  constructor(
    private ReferenciaService: ReferenciaService,
    private router: Router,
    private messageService: MessageService
  ) {

  }
  ngOnInit(): void {
    this.mostrarReferencia();
  }

  mostrarReferencia(){
    this.ReferenciaService.getAllReferencia().subscribe({next: (data)=>{
      this.referencia = data.referencia
      console.log(this.referencia)
    }})
  }

}
