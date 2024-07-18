import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
 
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  signIn() {
    const user = { email: this.email, password: this.password };
    this.http.post('http://localhost:9992/login', user).subscribe({
      next: (response: any) => {
        console.log('User logged in successfully', response);
        this.router.navigate(['/']); // or wherever you want to navigate on successful login
      },
      error: (error) => {
        console.error('Error logging in', error);
        if (error.status === 401) {
          alert('Incorrect email or password');
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    });
  }
  
}
