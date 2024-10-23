import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    // Get the user ID from the URL and fetch the user data
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUserById(userId);
  }
}
