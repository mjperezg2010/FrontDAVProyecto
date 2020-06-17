import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/model/restaurante.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurantes:Restaurante[];

  constructor(public appservice:AppService,public router:Router) { }

  ngOnInit(): void {
    this.restaurantes=this.appservice.restaurantes;
  }

  goRestaurante(restaurante:Restaurante) {
    this.appservice.setRestauranteActual(restaurante);
    this.router.navigate(['/paginarestaurante']);
    
  }

}
