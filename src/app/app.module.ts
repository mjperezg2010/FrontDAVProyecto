import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HttpClientModule } from '@angular/common/http';



//Import Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { PaginaRestauranteComponent } from './principal/pagina-restaurante/pagina-restaurante.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './principal/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RecomendadoComponent } from './recomendado/recomendado.component';





@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PaginaRestauranteComponent,
    HomeComponent,
    RecomendadoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
    

 
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
