import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  post(data): Observable<any> {
    return this.http.post(`${baseUrl}project`, data);
  }
  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}project`);
  }
  getById(id): Observable<any> {
    return this.http.get(`${baseUrl}project/${id}`);
  }
  put(id, data): Observable<any> {
    return this.http.put(`${baseUrl}project/${id}`, data);
  }
  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}project/${id}`);
  }
}
