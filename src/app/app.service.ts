import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { restauranteAPI } from './model/restauranteAPI.model';
import { Usuario } from './model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private restauranteActual:restauranteAPI;
  private usuarioActual:Usuario;






  //Restaurantes API

  private restaurantesAPI:restauranteAPI[]=[];

  //Usuarios
  private usuarios:Usuario[]=[];

  //Recomendados Restaurantes
  private recomendados:restauranteAPI[]=[]

  //Imagenes
  public imagenes:string[]=[
    "https://eldiariony.com/wp-content/uploads/sites/2/2020/03/jason-leung-poi7delfiva-unsplash.jpg?quality=80&strip=all&w=960",
  "http://barcongo.com.ar/wp-content/uploads/2020/04/aromatizacion-restaurantes.jpg",
"https://cache.marriott.com/marriottassets/marriott/GYECY/gyecy-restaurant-0113-hor-clsc.jpg?downsize=1440px:*",
"https://d1mrtjpezxphht.cloudfront.net/wp-content/uploads/2019/03/food_51.jpg",
"https://s1.eestatic.com/2020/03/12/cocinillas/actualidad-gastronomica/Coronavirus-Restaurantes-Actualidad_gastronomica_474214624_148088011_1706x960.jpg",
"https://elomnivoro.com/wp-content/uploads/2014/04/Noma-6-www.publinews.gt_.jpg",
"https://elomnivoro.com/wp-content/uploads/2014/04/el-dom-2.jpg",
"https://www.arquitecturaydiseno.es/medio/2018/05/28/nuevo-noma-dinamarca-rene-redzepi2_095f9df1.jpg",
"https://www.eleconomista.com.mx/__export/1562374162344/sites/eleconomista/img/2019/07/05/05-geranium.png_1741123634.png",
"https://red-viajes.com/wp-content/uploads/2019/09/los-7-mejores-restaurantes-romanticos-de-sudafrica.jpg"



  ]

  constructor(public http:HttpClient) {
    


  }

 
  //Acceder Restaurantes de la API
  getRestaurantesAPI(){
    

    this.http.get('http://3.21.214.204/api/Restaurante').subscribe(
      (data) => {

        const temp = Object.getOwnPropertyNames(data);
      
        
      for (let i = 0; i < temp.length-1; i++) {
        this.restaurantesAPI.push(data[i]);
        
      }
  
      return this.restaurantesAPI
      


      },
      (error) => {
        console.error(error);
        
      }
    );

    return this.restaurantesAPI

  }

  //Acceder usuario de la api
  getUsuarios(){

    this.http.get('http://3.21.214.204/api/Usuario').subscribe(
      (data) => {

        const temp = Object.getOwnPropertyNames(data);
        
        
      for (let i = 0; i < temp.length-1; i++) {
        this.usuarios.push(data[i]);
        
      }
     
      return this.usuarios

      },
      (error) => {
        console.error(error);
        
      }
    );

  
    return this.usuarios

  }


  //Acceder restaurantes recomendados de la api
  getRecomendados(){
    var url='http://3.21.214.204/api/Recomendation/'+this.usuarioActual.ID;
    

    this.http.get(url).subscribe(

      (data) => {

        const temp = Object.getOwnPropertyNames(data);
        
      //this.recomendados=[]  
      for (let i = 0; i < 10; i++) {
        this.recomendados.push(data[i]);
        
      }
      console.log(this.recomendados)
     
      return this.recomendados

      },
      (error) => {
        console.error(error);
        
      }
    );

  
    return this.recomendados
        
    

  }

  setRestauranteActual(restaurante:restauranteAPI){
    this.restauranteActual=restaurante;

  }

  getRestauranteActual(){
    return this.restauranteActual;
  }

  setUsuarioActual(usuario:Usuario){
    this.usuarioActual=usuario
  }

  getUsuarioActual(){
    return this.usuarioActual
  }

  
  

}
