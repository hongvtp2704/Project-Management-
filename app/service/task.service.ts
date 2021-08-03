import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {
  }
  getTaskByProject(idProject):Observable<any>{
    return this.http.get(`${baseUrl}task/project/${idProject}`);
  }
  postTask(data):Observable<any>{
    return this.http.post(`${baseUrl}task`, data);
  }
  putTask(id,data):Observable<any>{
    return this.http.put(`${baseUrl}task/${id}`, data);
  }
  getTask(id):Observable<any>{
    return this.http.get(`${baseUrl}task/${id}`);
  }
  deleteTask(id):Observable<any>{
    return this.http.delete(`${baseUrl}task/${id}`);
  }
}
