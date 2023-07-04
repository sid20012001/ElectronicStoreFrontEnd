import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  public url='http://localhost:8080/categories'

  constructor(private http:HttpClient) { }

  public getCategory(){
   return this.http.get(this.url);
  }
}
