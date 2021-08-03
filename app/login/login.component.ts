import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  error = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }
  login() {
    this.authService.login(this.formGroup.value).subscribe((result) => {
      if (result.token) {
        this.authService.setToken(result.token);
        if (this.authService.role == 'Leader') {
          this.router.navigate(['/leader']);
        }
        if (this.authService.role == 'Employee') {
          this.router.navigate(['/employee']);
        }
      } else this.error = result.message;
    });
  }
}
