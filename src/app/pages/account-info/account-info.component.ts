import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent {
  constructor(private login: LoginserviceService, private router: Router) {}

  logindata = {
    username: '',
    password: ''
  };

  loginUser() {
    this.login.generateToken(this.logindata).subscribe({
      next: (data: any) => {
        console.log(data);
        this.login.setToken(data.token);

        this.login.getCurrentUser().subscribe({
          next: (user: any) => {
            console.log("in getuser");
            console.log(user); // Output the received user data
            
            // Access user properties
            const email = user.email;
            const firstname = user.firstname;
            const lastname = user.lastname;
            const mobile = user.mobile;
            const role = user.role;
            const username = user.username;

            // Perform actions based on user role
            if (role === 'Admin') {
              console.log("redirecting to admin");
              this.router.navigate(['/admin']); // Redirect to admin page
            } else if (role === 'Normal') {
              console.log("redirecting to user");
              this.router.navigate(['/account/actualcart']); // Redirect to user page
            }

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(user));
          }
        });
      }
    });
  }
}
