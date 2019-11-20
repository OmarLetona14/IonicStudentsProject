import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  tickets:any=[];
  usuario:Usuario;

  constructor(private ticketsService:TicketsService, private router:Router) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
    this.getAllTickets();
  }

  public getAllTickets(){
    this.ticketsService.getByStudent(this.usuario.idUsuario.toString()).subscribe(
      res=>{
        this.tickets = res;
      },
      err=>{
        
      }
    );
  }

  add(){
    this.router.navigate(['/agregar-ticket']);
  }
}
