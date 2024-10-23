import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // List of users
  users = [
    { id: 1, username: 'admin', email: 'admin@somemail.com', status: 'Confirmed' },
    { id: 2, username: 'officer', email: 'officer@somemail.com', status: 'Blocked' },
    { id: 3, username: 'guest', email: 'guest@somemail.com', status: 'Confirmed' }
  ];

  constructor() { }

  // Method to get all users
  getAllUsers() {
    return this.users;
  }

  // Method to get a user by ID
  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }
}
