import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteI } from 'src/app/models/cliente';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css']
})
export class MostrarClienteComponent implements OnInit {
  public clientes:ClienteI[] = []
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarClientes()
  }

  mostrarClientes() {
    this.clienteService.getAllCliente()
      .subscribe({
        next: (data) => {
          this.clientes = data.cliente
          console.log(this.clientes)
        }
      })
  }
}
