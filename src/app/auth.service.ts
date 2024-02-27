import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  isAuthenticated = false;
  constructor() { }

  login(username: string, password: string): boolean 
  {
    if (username === 'neha' && password === 'Neha123') 
    {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }
  logout(): void 
  {  
    this.isAuthenticated = false;
  }
  checkAuthentication(): boolean 
  {
    return this.isAuthenticated;
  }
}