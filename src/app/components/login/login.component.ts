import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
  this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
    const user = users.find(
      u => u.email === this.email && u.password === this.password && u.role === 'admin'
    );

    if(user && user.role === 'admin') {
      localStorage.setItem('loggedInAdmin', JSON.stringify(user));
      this.router.navigate(['/admin-dashboard']).then(() => window.location.reload());
    } else {
      this.errorMessage = 'Invalid admin credentials';
    }
  });
}
}
