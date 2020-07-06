import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { restauranteAPI } from 'src/app/model/restauranteAPI.model';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-pagina-restaurante',
  templateUrl: './pagina-restaurante.component.html',
  styleUrls: ['./pagina-restaurante.component.css']
})
export class PaginaRestauranteComponent implements OnInit {

  restaurante:restauranteAPI;
  usuarios:Usuario[];
  id:string;

  constructor(public appservice:AppService,public router:Router) { }

  ngOnInit(): void {
    this.restaurante=this.appservice.getRestauranteActual();
    this.usuarios=this.appservice.getUsuarios();
    
  }

  getValue(value) {  
   this.id=value.target.value;
  }

  logIn(){
   

    for (let i = 0; i <this.usuarios.length; i++) {
      
      if(this.usuarios[i].ID==this.id){
        this.appservice.setUsuarioActual(this.usuarios[i])
        this.router.navigate(['/principal']);
        this.appservice.getRecomendados();
        
        break;
        
      }
      
    }

    


  }

}
