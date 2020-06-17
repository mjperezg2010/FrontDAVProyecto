import { Injectable } from '@angular/core';
import { Restaurante } from './model/restaurante.model';
import { Comida } from './model/comida.model';
import { Cliente } from './model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private restauranteActual:Restaurante;
  private clienteActual:Cliente;
  
 
  //Restaurantes
  restaurantes: Restaurante[]=[
  {
    id: 1,
     nombre: 'McDonalds',
     imagen: 'https://elintranews.com/wp-content/uploads/2019/10/05-49.jpg?w=680',
     oferta: "Hoy 2x1",
     avatar: 'https://elintranews.com/wp-content/uploads/2019/10/05-49.jpg?w=680'
  },
  {
    id:2,
    nombre: 'Dennys',
    imagen: 'https://notibomba.com/wp-content/uploads/2015/10/ubicaciones-DENNYS-e1445126404451.jpg',
    oferta: "Hoy anal gratis",
    avatar: 'https://notibomba.com/wp-content/uploads/2015/10/ubicaciones-DENNYS-e1445126404451.jpg'
  },
  
  {
    id:3,
    nombre: 'Campero',
    imagen: 'https://cdn.forbescentroamerica.com/2020/03/Pollo-Campero-800x450.jpg',
    oferta: "Hoy anal gratis",
    avatar: 'https://cdn.forbescentroamerica.com/2020/03/Pollo-Campero-800x450.jpg'
  },
  
  {
    id:4,
    nombre: 'Dennys',
    imagen: 'https://notibomba.com/wp-content/uploads/2015/10/ubicaciones-DENNYS-e1445126404451.jpg',
    oferta: "Hoy anal gratis",
    avatar: 'https://notibomba.com/wp-content/uploads/2015/10/ubicaciones-DENNYS-e1445126404451.jpg'
  }

];

//Comida
comidas:Comida[]=[
  {
    id:1,
    nombre:"Amburgueja",
    descripcion:"Esta hambuerguesa contiene pan carne y salsa osea una hamburguesa pue",
    precio: 189.00,
    restaurante: this.restaurantes[0]

  },
  {
    id:2,
    nombre:"Amburgueja2",
    descripcion:"Esta hambuerguesa contiene pan carne y salsa osea una hamburguesa pue",
    precio: 189.00,
    restaurante: this.restaurantes[0]

  },
  {
    id:3,
    nombre:"LA Vidal",
    descripcion:"Esta hambuerguesa contiene pan carne y salsa y tocino",
    precio: 189.00,
    restaurante:this.restaurantes[1]

  },
  {
    id:4,
    nombre:"LA Vidal2",
    descripcion:"Esta hambuerguesa contiene pan carne y salsa y tocino",
    precio: 189.00,
    restaurante:this.restaurantes[1]

  }
];

//Clientes

private clientes:Cliente[]=[
  {
    id:1,
    nombre:"Marcos",
    password:"Elpijo"
  },
  {
    id:2,
    nombre:"Tepisan",
    password:"ynoteavisan"
  }
];

  constructor() { }

  setRestauranteActual(restaurante:Restaurante){
    this.restauranteActual=restaurante;

  }

  getRestauranteActual(){
    return this.restauranteActual;
  }

  getComidas(){
    let temp:Comida[]=[];

    this.comidas.forEach(i => {
      if(i.restaurante==this.restauranteActual){
        temp.push(i);

      }
    });

    return temp;

  }

  getClienteActual(){
    return this.clienteActual;
  }

  setClienteActual(){
    this.clienteActual=this.clientes[0];
  }
}
