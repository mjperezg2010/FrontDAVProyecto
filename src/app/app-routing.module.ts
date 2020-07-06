import { NgModule } from '@angular/core';

import { PrincipalComponent } from './principal/principal.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginaRestauranteComponent } from './principal/pagina-restaurante/pagina-restaurante.component';


export const routes: Routes = [
  {
    path:"",
    redirectTo:'inicio',
    pathMatch:'full'

  },
  
  {
    path:'principal',
    component: PrincipalComponent,
    

  },
  {
    path:'inicio',
    component: PaginaRestauranteComponent,
    
  }  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports:[RouterModule ]
})
export class AppRoutingModule { }
