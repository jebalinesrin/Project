import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-formation-language',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './formation-language.component.html',
  styleUrl: './formation-language.component.css'
})
export class FormationLanguageComponent {
  selectedId: number | undefined;
  selectedItem: any;
  LangueItem = [
    {
      id:11,
      title: 'Formation Langue Espagnole pour les bacheliers',
      imageUrl:'assets/image/espagnol.jpg',      
    },
    {
      id:12,
      title: 'Formation en Anglais ',
      imageUrl: 'https://www.horizon-formation.net/images/CA/en.jpg',
      
    },
    {
      id:4,
      title: 'Formation en Turk',
     imageUrl:"https://turkce.yee.org.tr/images/2020/06/30/tr_infografi_franszca_slider.jpg",
    },
    {
      id:3,
      title: 'Formation en Français',
      imageUrl:"assets/image/fran.jpg",
    },
    {
      id:13,
      title:'Formation en Italien',
      imageUrl:"https://moncompte-personnel-formation.fr/wp-content/uploads/2023/12/certifications_italien_eligibles_cpf-scaled-e1703769280287.jpg",
      
    
    },
    {
      id:14,
      title:'Formation en Espagnol',
      imageUrl:"https://img.freepik.com/photos-premium/teen-etudiant-souriant-au-drapeau-espagnol_87414-4217.jpg",
    }
   
    
    
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.selectedId = +id;
        this.selectedItem = this.LangueItem.find(item => item.id === this.selectedId);
      } else {
        console.error('ID parameter is null');
      }
    });
  }
  onView(id: number): void {
    this.router.navigate(['/detail', id]);
  }
}
