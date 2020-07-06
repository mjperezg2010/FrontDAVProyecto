import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

import { Usuario } from '../model/usuario.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario:Usuario;

  constructor(public appservice:AppService,public router:Router) { }
 

  ngOnInit(): void {
    this.usuario=this.appservice.getUsuarioActual();
       
  }

  logout(){
    this.router.navigate(['/inicio']);
  }
  
  

 
}
