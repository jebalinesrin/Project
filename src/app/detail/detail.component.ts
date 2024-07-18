import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  selectedId: number | undefined;
  selectedItem: any;
  detailItem = [
    {
      id:1,
      title: 'Formation Spring Boot',
      description: "Spring Boot est un framework qui facilite le développement d'applications fondées sur Spring en offrant des outils permettant d'obtenir une application packagée en jar, totalement autonome.",
      imageUrl: 'assets/image/Spring boot.jpg',
      prix:120,
    },
    {
      id:2,
      title: 'Learn Tailwind CSS to make your own design  perfect',
      description: "Tailwind CSS se distingue par sa simplicité d'utilisation et sa capacité à personnaliser entièrement le design sans écrire une ligne de CSS. ",
      imageUrl: 'https://dyma.fr/assets/technos/tailwind.jpg',
      prix:80,
    },
    {
      id:3,
      title: 'Formation Communication en français',
      description:"cette formation offrant une capacitée de communiquer avec confiance en français",
      imageUrl:"assets/image/fran.jpg",
      prix:135,
    },
    {
      id:4,
      title: 'Formation en Turkich',
      description:"cette formation offrant une capacitée de communiquer avec confiance en Turkich",
      imageUrl:"https://turkce.yee.org.tr/images/2020/06/30/tr_infografi_franszca_slider.jpg",
      prix:135,
    },
    {
      id:5,
      title: 'Formation en PHP',
      description:"PHP est un langage de script qui est particulièrement adapté au développement web. Rapide et flexible il intègre tous les outils nécessaires à la création de sites dynamiques.",
      imageUrl:"https://blog.codito.dev/images/headers/php.png",
      prix:125,
    } ,
    {
      id:6,
      title:"Formation en Django",
      description:"Dans cette formation complète, apprenez à développer des sites web avec le framework Django et le langage Python.",
      imageUrl:"https://pbs.twimg.com/media/Eq05ju9XAAApCoM.jpg:large",
      prix:135,
    },
    {
      id:7,
      title:"Formation Python pour AI",
      description:"Dans cette formation complète, apprenez à développer des AI avec  le langage Python.",
      imageUrl:"assets/image/pytonAI.jpg",
      prix: 180,
    },
    {
      id:9,
      title: 'Formation en Python',
      description:"Dans cette formation complète, apprenez à développer des sites web avec le langage Python.",
     imageUrl:"assets/image/python.jpg",
     prix:120,
    },
    {
      id:10,
      title: 'Formation DEVELLOPEMENT WEB POUR LES DEBUTANS',
      description:"Decouvrir toute les Languages HTML , CSS et JS ",
      imageUrl:"assets/image/BASE.jpg",
      prix:50,
    },
   
    {
      id:11,
      title: 'Formation Langue Espagnole pour les bacheliers',
      description:"cette formation offrant une capacitée de communiquer avec confiance en Espagnole",
      imageUrl: 'assets/image/espagnol.jpg',
      prix:135,
    },
    {
      id:12,
      title: 'Formation en Anglais ',
      description:"cette formation offrant une capacitée de communiquer avec confiance en Anglais",
      imageUrl: 'https://www.horizon-formation.net/images/CA/en.jpg',
      prix:135,
      
    },
    {
      id:13,
      title:'Formation en Italien',
      description:"cette formation offrant une capacitée de communiquer avec confiance en Italien",
      imageUrl:"https://moncompte-personnel-formation.fr/wp-content/uploads/2023/12/certifications_italien_eligibles_cpf-scaled-e1703769280287.jpg",
      prix:135,
    
    },
    {
      id:14,
      title:'Formation en Espagnol',
      description:"cette formation offrant une capacitée de communiquer avec confiance en Espagnol",
      imageUrl:"https://img.freepik.com/photos-premium/teen-etudiant-souriant-au-drapeau-espagnol_87414-4217.jpg",
    }
  

    
  ];
  email: String='';
  fullname:String ='';

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.selectedId = +id;
        this.selectedItem = this.detailItem.find(item => item.id === this.selectedId);
      }
    });
  }
  Inscription() {
    const inscriptionData = {
      id: this.selectedItem.id,
      fullname: this.fullname,
      email: this.email,
      formation_name: this.selectedItem.title,
      prix: this.selectedItem.prix
    };

    console.log('Sending inscriptionData:', inscriptionData);

    this.http.post<any>('http://localhost:9992/Inscription', inscriptionData).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/']);
      },
      error: (err) => {
        if (err.status === 400) {
          console.error('Email already exists');
        } else {
          console.error('An error occurred:', err);
        }
      }
    });
  }
}
