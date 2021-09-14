import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SingleHeroComponent } from './components/single-hero/single-hero.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,

 
  },
  {
    path: 'hero/:id', component: SingleHeroComponent,

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
