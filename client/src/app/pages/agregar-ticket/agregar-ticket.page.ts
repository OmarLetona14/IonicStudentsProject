import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/models/Ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-ticket',
  templateUrl: './agregar-ticket.page.html',
  styleUrls: ['./agregar-ticket.page.scss'],
})
export class AgregarTicketPage implements OnInit {

  usuario:Usuario;
  contenido:string;
  asunto:string;
  codTicket:number;
  ticket:Ticket={
    codTicket:0,
    idUsuario:0,
    asunto:'',
    contenido:'',
    estado:''
  };
  estado:string;


  constructor(private ticketsService:TicketsService, private router:Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
    this.estado= 'Creado';
  }

  agregarTicket(){
    this.ticket.codTicket = this.codTicket;
    this.ticket.contenido = this.contenido;
    this.ticket.asunto = this.asunto;
    this.ticket.idUsuario = this.usuario.idUsuario;
    this.ticket.estado =this.estado;
    this.ticketsService.save(this.ticket).subscribe(
      res=>{
        this.router.navigate(['/ticket']);
      },
      err=>{

      }
    );
  }

}
