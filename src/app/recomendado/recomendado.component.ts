import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { restauranteAPI } from '../model/restauranteAPI.model';

@Component({
  selector: 'app-recomendado',
  templateUrl: './recomendado.component.html',
  styleUrls: ['./recomendado.component.css']
})
export class RecomendadoComponent implements OnInit {

  restaurantes:restauranteAPI[]=[];

  constructor(public appservice:AppService) {
    
  }

  ngOnInit(): void {
    this.restaurantes=this.appservice.getRecomendados();
  }

}
