import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule 
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
 
  blogPosts = [
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
      imageUrl: 'https://dyma.fr/assets/technos/tailwind.jpg'
    },
    {
      id:3,
      title: 'Formation Communication en français',
      description:"cette formation offrant une capacitée de communiquer avec confiance en français",
      imageUrl:"assets/image/fran.jpg",
    },
    {
      id:4,
      title: 'Formation en Turkich',
      description:"cette formation offrant une capacitée de communiquer avec confiance en Turkich",
      imageUrl:"https://turkce.yee.org.tr/images/2020/06/30/tr_infografi_franszca_slider.jpg",
    },
    {
      id:5,
      title: 'Formation en PHP',
      description:"PHP est un langage de script qui est particulièrement adapté au développement web. Rapide et flexible il intègre tous les outils nécessaires à la création de sites dynamiques.",
      imageUrl:"https://blog.codito.dev/images/headers/php.png",
    } ,
    {
      id:6,
      title:"Formation en Django",
      description:"Dans cette formation complète, apprenez à développer des sites web avec le framework Django et le langage Python.",
      imageUrl:"https://pbs.twimg.com/media/Eq05ju9XAAApCoM.jpg:large",
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  

  onReadMore(id: number): void {
    this.router.navigate(['/detail', id]);
  }

}
