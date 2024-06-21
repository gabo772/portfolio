import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [RegistrationComponent, SidebarComponent],
  declarations: [
    FormComponent,
    ListPeopleComponent,
    RegistrationComponent,
    SidebarComponent,
    HomeComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent
  ],
  providers: [],
})
export class SharedModule { }
