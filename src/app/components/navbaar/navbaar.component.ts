import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbaar',
  templateUrl: './navbaar.component.html',
  styleUrls: ['./navbaar.component.css']
})
export class NavbaarComponent implements OnInit {
 isLoggedIn = false;

 constructor(private router:Router){}

ngOnInit() {
  this.checkLoginStatus();
}

checkLoginStatus() {
  const user = localStorage.getItem('loggedInAdmin');
  this.isLoggedIn = !!user;
}
logout() {
  localStorage.removeItem('loggedInAdmin');
  this.router.navigate(['/login']);
}

}
