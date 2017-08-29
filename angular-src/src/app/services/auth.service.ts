import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import 'rxjs'

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  

  constructor(private http:Http) { }
  all_users() {
    return this.http.get('http://localhost:3000/users/all_users')
      .map(data => data.json())
      .toPromise()
      
  }
  edit_user(user, username){
    let postData = {
       newUser : user,
       oldname : username
    }
    return this.http.post('http://localhost:3000/users/updateuser', postData)
    .map(data=> data.json())
    .toPromise()
  }
//suscribe to observable that will register the user in the backend and send back success true or false and message
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers:headers})
      .map(res=> res.json())
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers:headers})
      .map(res=> res.json())
  }
  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers:headers})
      .map(res=> res.json())
      
  }
  
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    // make a string for storage, but when we get back we will parse to Json Object
    localStorage.setItem('user', JSON.stringify(user)); 
    this.authToken = token;
    this.user = user;

  }
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  loggedIn(){
    return tokenNotExpired('id_token');
  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    console.log("you have logged out");
  }
}
