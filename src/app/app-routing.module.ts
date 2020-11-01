import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'contacto', component:ContactosComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'quienes-somos', component:QuienesSomosComponent},
  {path: 'galeria', component:GaleriaComponent},
  {path:'**', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
