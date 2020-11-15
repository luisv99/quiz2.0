import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { personaje } from '@app/static/interface/personaje.interface';
import { PersonajeService } from '@app/static/servicios/personaje.service';
import { take , filter} from "rxjs/operators";

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent implements OnInit {

  personajes: personaje[] = [];
  
  info: RequestInfo = {
    next: null
  };

  private pageNum = 1;
  private query: string= "";
  private hideScrollHeight = 200;
  private showScrollHeight = 500;


  constructor(private personajeServicio :  PersonajeService, private route: ActivatedRoute, private router: Router) { 
    this.url();
  }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  private url(): void{
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd)).subscribe(
        ()=> {
          this.personajes = [];
          this.pageNum = 1;
          this.obtenerPersonajes();
        }
      )
  }

  private obtenerPersonajes():void{
    this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap)=>{
      console.log('Params', params);  
      this.query = params ['q'];
        this.serviceData();
      });
    }


  private serviceData(): void{
    this.personajeServicio.buscarPersonaje(this.query , this.pageNum).pipe
    (take(1)
    ).subscribe((res: any) => {
      if(res?.results?.length){
        const {info, results} = res;
      this.personajes = [...this.personajes , ...results];
      this.info = info;
      }else{
        this.personajes = [];
      }
     
      
    })
  }



}
