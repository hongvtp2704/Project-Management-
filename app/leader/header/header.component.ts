import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userName: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userName = this.authService.userName.charAt(0).toUpperCase();
  }
}
