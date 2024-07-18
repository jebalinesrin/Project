import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  isMenuOpen = false;

 
 

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
   
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log("Menu toggled, isMenuOpen:", this.isMenuOpen);
  }

  signOut() {
    
    this.router.navigate(['/']); 
  }
}
