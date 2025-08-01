import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 constructor(public auth : AuthService){}
 logedIn! :boolean
ngOnInit(){
  this.logedIn = this.auth.isAthunticated();

}
ngOnDestroy(){
  this.logedIn = false;
}
 logout(){
  this.auth.logOut();
 }
}
