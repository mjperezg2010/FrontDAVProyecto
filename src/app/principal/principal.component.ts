import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Cliente } from '../model/cliente.model';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public cliente:Cliente;

  constructor(public appservice:AppService) { }
 

  ngOnInit(): void {
    this.appservice.setClienteActual();
    this.cliente=this.appservice.getClienteActual();

    
  }

  

 
}
