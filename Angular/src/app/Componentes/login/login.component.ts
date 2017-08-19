import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo:string;
  password:string;

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
  loguearse(){
  this.router.navigate(["inicio"])
}

}
