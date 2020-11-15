import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DetallePersonajesComponent,ListaPersonajesComponent],
  imports: [CommonModule, RouterModule],
  exports:[DetallePersonajesComponent,ListaPersonajesComponent]
})
export class PersonajesModule { }
