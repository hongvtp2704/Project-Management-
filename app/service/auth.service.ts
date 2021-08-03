import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string;
  userName: string;
  constructor(private http: HttpClient, private router: Router) {}
  login(data): Observable<any> {
    return this.http.post(`${baseUrl}user/login`, data);
  }
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
  logout() {
    this.removeToken;
    this.router.navigate(['/']);
  }
  setToken(token: string) {
    if (!token) {
      this.removeToken;
      return;
    }
    localStorage.setItem('token', token);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    this.role = decodedToken.payload.role;
    this.userName = decodedToken.payload.userName;
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpried = helper.isTokenExpired(token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }
  getToken() {
    localStorage.getItem('token');
  }
}
