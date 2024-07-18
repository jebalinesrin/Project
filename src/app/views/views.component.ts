import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-views',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent {
  selectedItem: any;
  selectedId: any;
  ViewsItem=[
    {
      id:1,
      name:"Formation MEARN STACK",
      description:"devenir develloppeur web mern stack",
      VideoUrl:"assets/image/mearn.jpg",
     prix:125,
    },
    {
      id:2,
      name:"Formation en python",
      description:"Dans cette formation complète, apprenez à développer des sites web avec le langage Python.",
      VideoUrl:"assets/image/python.jpg",
     prix:120,
    },
    {
      id:3,
      name:"Formation Des Langues",
      description:"decouvrir plusierus Langues pour la communiquer",
      VideoUrl:"assets/image/espagnol.jpg",
      prix:70,
    },
  ];




  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
  email: String='';
  fullname:String ='';
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.selectedId = +id;
        this.selectedItem = this.ViewsItem.find(item => item.id === this.selectedId);
      } else {
        console.error('ID parameter is null');
      }
    });
  }
  Inscription() {
    const inscriptionData = {
      id: this.selectedItem.id,
      fullname: this.fullname,
      email: this.email,
      formation_name: this.selectedItem.title, // Ensure this matches your backend field name
      prix: this.selectedItem.prix
    };

    console.log('Sending inscriptionData:', inscriptionData); // Check the data before sending

    this.http.post<any>('http://localhost:9992/Inscription', inscriptionData).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
        // Redirect to login or home page after successful registration
        this.router.navigate(['/login']);
      },
     
    });
  }
}
