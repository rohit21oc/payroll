import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebaar',
  templateUrl: './sidebaar.component.html',
  styleUrls: ['./sidebaar.component.css']
})
export class SidebaarComponent {
 isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
