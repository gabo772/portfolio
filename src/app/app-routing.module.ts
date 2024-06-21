import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { SkillsComponent } from './shared/pages/skills/skills.component';
import { ExperienceComponent } from './shared/pages/experience/experience.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "experience",
    component: ExperienceComponent
  },
  {
    path: "skills",
    component: SkillsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "pokedex",
    loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule)
  },
  {
    path: "**",
    redirectTo: ""
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
