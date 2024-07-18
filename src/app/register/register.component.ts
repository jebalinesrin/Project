import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  fullname: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  signUp() {
    const user = { fullname: this.fullname, email: this.email, password: this.password };
    this.http.post('http://localhost:9992/signup', user).subscribe({
      next: (response: any) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/Sign']);
      },
      error: (error) => {
        console.error('Error registering user', error);
      }
    });
  }

}
