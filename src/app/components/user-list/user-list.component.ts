import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'; // Add this import for navigation

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    // Get all users from the service
    this.users = this.userService.getAllUsers();
  }

  // Function to navigate to the user details page
  selectUser(id: number) {
    this.router.navigate(['/user', id]);
  }
}
