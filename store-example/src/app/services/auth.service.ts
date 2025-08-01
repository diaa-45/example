import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogedIn =false ;
  constructor() { }

  login(email : string , password : string): boolean {
    if (email === 'admin@gmail.com' && password ==='admin'){
        this.isLogedIn =true;
        localStorage.setItem('logedIn','login')
        return true
    }
    return false ;
  }

  logOut(): void {
    this.isLogedIn =false;
    localStorage.removeItem('logedIn');
  }
  isAthunticated(): boolean{
    return localStorage.getItem('logedIn') !== null;
   /* if (localStorage.getItem('logedIn') !== null){
    return true
   }else{
    return false
   } */
  }
}
