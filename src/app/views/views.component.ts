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
      VideoUrl:"https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/449460725_1060374489221045_222196934165568184_n.jpg?stp=dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hBYUdWHyfO4Q7kNvgGkeRiD&_nc_ht=scontent.ftun14-1.fna&oh=00_AYBiu3JOavUae7lj21uskjvtwiYGCX9TV7PR16vIeJCS8A&oe=66887EC4",
     prix:125,
    },
    {
      id:2,
      name:"Formation en python",
      description:"Dans cette formation complète, apprenez à développer des sites web avec le langage Python.",
      VideoUrl:"assets/image/espagnol.jpg",
     prix:120,
    },
    {
      id:3,
      name:"Formation Des Langues",
      description:"decouvrir plusierus Langues pour la communiquer",
      VideoUrl:"https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/428628872_970745064850655_7722672914809592542_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9EmVvaNlG1cQ7kNvgGh9FPz&_nc_ht=scontent.ftun14-1.fna&oh=00_AYAS31qPnTY1SywB42aJZpgWYPGFlnOpRZE5xq01qrENwQ&oe=668881DB",
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
