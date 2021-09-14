import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
// import { ItemCardComponent } from './components/item-card/item-card.component';
import {HttpClientModule} from '@angular/common/http' 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SingleHeroComponent } from './components/single-hero/single-hero.component';



@NgModule({
  declarations: [
    HomeComponent,
    // ItemCardComponent,
    SingleHeroComponent,
  

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  bootstrap: []
})
export class HomeModule { }
