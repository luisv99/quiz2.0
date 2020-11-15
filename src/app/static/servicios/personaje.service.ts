import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http" 
import { personaje } from '../interface/personaje.interface';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) { }

buscarPersonaje(query = '' , page=1){
  return this.http.get<personaje[]>(`${environment.APIURL}/?name=${query}&page=${page}`)
}

obtenerDetalles(id: number){
  return this.http.get<personaje[]>(`${environment.APIURL}/${id}`)
}
  
}
