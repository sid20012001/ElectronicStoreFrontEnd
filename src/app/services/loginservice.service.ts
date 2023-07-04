import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  //current user: which is loggedin
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/loggedin-user`);
  }

  //generate token

  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  //login user: set token in localStorage
  public setToken(token: string) {
    localStorage.setItem('token', token);
    return true;
  }

  //isLogin: user is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } 
      return true;
    
  }
  // logout : remove token from local storage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //set userDetail
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
     
      this.logout();
      
    }
  }

  
  public getUserRole() {
    let user = this.getUser();
    if (user && user.authorities && user.authorities.length > 0) {
      return user.authorities[0].authority;
    }
    //return 'Normal'; // or any default value if authorities are not defined
  }
}
