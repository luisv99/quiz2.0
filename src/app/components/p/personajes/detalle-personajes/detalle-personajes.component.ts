import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { personaje } from '@app/static/interface/personaje.interface';
import { PersonajeService } from '@app/static/servicios/personaje.service';
import { Location } from '@angular/common';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.scss']
})
export class DetallePersonajesComponent implements OnInit {
personaje$: Observable<personaje[]>;

  constructor(private route: ActivatedRoute, private pService: PersonajeService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id = params['id'];
      this.personaje$ = this.pService.obtenerDetalles(id);

    });
  }
irAtras():void{
  this.location.back();
}
}
