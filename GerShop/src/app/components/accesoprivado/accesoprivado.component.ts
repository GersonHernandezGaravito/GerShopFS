import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesoprivado',
  templateUrl: './accesoprivado.component.html',
  styleUrls: ['./accesoprivado.component.css']
})
export class AccesoprivadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  comprobarRol(){
    return localStorage.getItem('rol');
  }
}
