import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  usuario = {
    nombreU: '',
    contrasena: ''
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ingreso(){
    this.authService.ingreso(this.usuario)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        localStorage.setItem('rol', res.rol);
        
        this.router.navigate(['/privado']);
      },
      err => console.log(err)
    )
  }

}
