import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router,
              private rutaActiva:ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.params
      .subscribe(
        params=>{
          console.log(params);
        }
      )
  }

  volverInicio(){
    this.router.navigate(["inicio"])
  }
  volverLoguin(){
    this.router.navigate(["login"])
  }

}
