import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';
import { OurProjectComponent } from './components/our-project/our-project.component';

const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'our-project' , component: OurProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
