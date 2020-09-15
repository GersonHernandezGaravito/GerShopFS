import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //puedo variables de entorno
  private url = 'http://localhost:3130/api'
  
  constructor(private http: HttpClient, private router: Router) { }

  registro(usuario){
    return this.http.post<any>(this.url + '/registrar', usuario);

  }

  ingreso(usuario){
    return this.http.post<any>(this.url + '/ingresar', usuario);

  }

  menu(){
    return this.http.get<any>(this.url + '/menuL');
    
  }
  public lista(): Observable<AppComponent[]> {
    return this.http.get<AppComponent[]>(this.url + '/');
    
  }

  comprobarIngreso(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('usuario');
    this.router.navigate(['/ingresar']);
  }
  
  comprobarRol(){
    return localStorage.getItem('rol');
  }

  comprobarEstilo(){
    return localStorage.getItem('estilo');
  }
}
