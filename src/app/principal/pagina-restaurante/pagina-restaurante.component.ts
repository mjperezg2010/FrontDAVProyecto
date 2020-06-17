import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Restaurante } from 'src/app/model/restaurante.model';
import { Router } from '@angular/router';
import { Comida } from 'src/app/model/comida.model';

@Component({
  selector: 'app-pagina-restaurante',
  templateUrl: './pagina-restaurante.component.html',
  styleUrls: ['./pagina-restaurante.component.css']
})
export class PaginaRestauranteComponent implements OnInit {

  restaurante:Restaurante;
  comidas:Comida[];

  constructor(public appservice:AppService,public router:Router) { }

  ngOnInit(): void {
    this.restaurante=this.appservice.getRestauranteActual();
    this.comidas=this.appservice.getComidas();
  }

  goHome() {
    this.router.navigate(['/principal']);    
  }

}
