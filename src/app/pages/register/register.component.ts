import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  url = 'http://localhost:8080/create-user'; // Replace with your desired URL

  constructor(private http: HttpClient) { }

  userDetail = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    mobile: '',
    email: ''
  };

  register() {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    

    this.http.post<any>(this.url, this.userDetail).subscribe(
      (data) => {
        alert("User Added Successfully!");
        console.log('User Added Successfully');
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
}
