import { Component } from '@angular/core';
import { AuthService } from "./service/auth.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modeloMenu = [{
    _id: '',
    menu: '',
    padre: '',
    link: '',
    permiso: ''
  }]

  
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() { 
    this.cargarMenu();
  }

  cargarMenu(){
    this.authService.menu()
    .subscribe(
      res => {
        //console.log(res)
        this.modeloMenu = res;
        console.log(this.modeloMenu)
        
      },
      err => console.log(err)
    )
  }

  cargarMenus(): void {
    console.log(this.modeloMenu)
  }

}
