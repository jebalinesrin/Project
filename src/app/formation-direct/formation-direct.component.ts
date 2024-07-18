import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-formation-direct',
  standalone: true,
  imports: [
    CommonModule 
  ],
  templateUrl: './formation-direct.component.html',
  styleUrl: './formation-direct.component.css'
})
export class FormationDirectComponent {
  selectedId: number | undefined;
  selectedItem: any;
  DEVWEBItem = [
    {
      id:1,
      title: 'Formation Spring Boot',
      description: "Spring Boot est un framework qui facilite le développement d'applications fondées sur Spring en offrant des outils permettant d'obtenir une application packagée en jar, totalement autonome.",
      imageUrl: 'assets/image/Spring boot.jpg',
      
    },
    {
      id:2,
      title: 'Learn Tailwind CSS to make your own design  perfect',
      description: "Tailwind CSS se distingue par sa simplicité d'utilisation et sa capacité à personnaliser entièrement le design sans écrire une ligne de CSS. Fini les noms de classe longs et répétitifs : avec Tailwind, vous composez vos styles avec des classes utilitaires préconçues, rendant votre code plus lisible et facile à maintenir.",
      imageUrl: 'https://dyma.fr/assets/technos/tailwind.jpg',
      
    },
    {
      id:9,
      title: 'Formation en Python',
      description:"Dans cette formation complète, apprenez à développer des sites web avec le langage Python.",
     imageUrl:"assets/image/python.jpg",
    },
    {
      id:10,
      title: 'Formation DEVELLOPEMENT WEB POUR LES DEBUTANS',
      description:"Decouvrir toute les Languages HTML , CSS et JS ",
      imageUrl:"assets/image/BASE.jpg",
    },
    {
      id:5,
      title: 'Formation en PHP',
      description:"PHP est un langage de script qui est particulièrement adapté au développement web. Rapide et flexible il intègre tous les outils nécessaires à la création de sites dynamiques.",
      imageUrl:"https://blog.codito.dev/images/headers/php.png",
     
    } ,
   
    {
      id:7,
      title:"Formation Python pour AI",
      description:"Dans cette formation complète, apprenez à développer des AI avec  le langage Python.",
      imageUrl:"assets/image/pytonAI.jpg",

    },
   
    
    
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.selectedId = +id;
        this.selectedItem = this.DEVWEBItem.find(item => item.id === this.selectedId);
      } else {
        console.error('ID parameter is null');
      }
    });
  }
  onReadMore(id: number): void {
    this.router.navigate(['/detail', id]);
  }
}
