import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { restauranteAPI } from 'src/app/model/restauranteAPI.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurantes:restauranteAPI[];
  

  constructor(public appservice:AppService,public router:Router) {
  
  }

  ngOnInit(): void {
    
    this.restaurantes=this.appservice.getRestaurantesAPI();
    
    
  }



}
