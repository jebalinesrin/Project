import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  HomeItems=[
    {
      id:1,
      name:"Formation MEARN STACK",
      description:"devenir develloppeur web mern stack",
      imageUrl:"assets/image/mearn.jpg",

    },
    {
      id:2,
      name:"Formation en python",
      description:"Dans cette formation complète, apprenez à développer des sites web avec le langage Python.",
      imageUrl:"assets/image/python.jpg",
    },
    {
      id:3,
      name:"Formation De Langue Espagnol",
      description:"decouvrir plusierus Langues pour la communiquer",
      imageUrl:"assets/image/espagnol.jpg",
    }
  ];
 
  Email:String='';
  password :string='';
  Tel :string='';
  message: string ='';

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }  
  Contact() {
    const ContactData = {
      email: this.Email,
      message:this.message,
      password:this.password,
      tel:this.Tel
    };

    console.log('Sending ContactData:', ContactData);

    this.http.post<any>('http://localhost:9992/Contact', ContactData).subscribe({
      next: (response: any) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
      },
      error: (err: { status: number; }) => {
        if (err.status === 400) {
          console.error('Email already exists');
        } else {
          console.error('An error occurred:', err);
        }
      }
    });
  }
  ngOnInit(): void {
  }

 
  onView(id: number): void {
    this.router.navigate(['/Views', id]);
  }
 
}
