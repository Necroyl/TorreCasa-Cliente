import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmoRoutingModule } from './inmo-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { ViviendaComponent } from './pages/vivienda/vivienda.component';
import { PropCardComponent } from './components/prop-card/prop-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapsModule } from '../maps/maps.module';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    ListadoComponent,
    HomeComponent,
    ViviendaComponent,
    PropCardComponent,
    AgregarComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    InmoRoutingModule,
    ReactiveFormsModule,
    MapsModule,
    FormsModule
  ]
})
export class InmoModule { }
