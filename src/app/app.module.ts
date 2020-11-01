import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NgxGalleryModule } from 'ngx-gallery-9';


@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    FooterComponent,
    GaleriaComponent,
    HomeComponent,
    NavbarComponent,
    ProductosComponent,
    QuienesSomosComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
