import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  loginForm: any;

  constructor(private fb: FormBuilder, private router: Router,
    private authService: AuthService // Inject AuthService
  ) {}

  ngOnInit(): void 
  {
     this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit()
  {
    if (this.loginForm.valid) 
    {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      // Call login method from AuthService
      if (this.authService.login(username, password)) 
      {
        this.router.navigate(['/display-data']);
      } 
      else 
      {
        alert('Invalid username or password');
      }
    }
  }
}