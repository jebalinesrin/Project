import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { DetailComponent } from './detail/detail.component';
import { FormationDirectComponent } from './formation-direct/formation-direct.component';
import { FormationLanguageComponent } from './formation-language/formation-language.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewsComponent } from './views/views.component';


export const routes: Routes = [
    { path: '', component:HomeComponent},
    { path: 'direct', component:FormationDirectComponent},
    { path: 'Langue', component:FormationLanguageComponent},
    {path: 'Sign', component:SignInComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'Blog', component:BlogComponent},
    {path: 'About', component:AboutComponent},
    {path: 'detail/:id', component:DetailComponent},
    {path: 'Views/:id',component:ViewsComponent},
];
