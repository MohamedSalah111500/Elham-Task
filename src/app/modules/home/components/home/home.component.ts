import { Component, OnDestroy, OnInit } from "@angular/core";
import { from, Subscription } from "rxjs";
import { HeroService } from "../../services/hero.service";
// import { Product } from '../../models/Product';
// import { Hero } from '../../models/Hero';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Hero } from "../../models/Hero";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  faStar = faStar;

  heros: Hero[] = [];
  herosFiltered: Hero[];
  Subscription = new Subscription();
  isLoading: boolean = false;
  constructor(private _HeroService: HeroService) {
    this.Subscription.add(
      this._HeroService.searchWord.subscribe((word) => this.searchOnHeros(word))
    );

    this.Subscription.add(
      this._HeroService.sortFlag.subscribe((flag) => this.sortOnHeros(flag))
    );
  }

  ngOnInit(): void {
    this.getAllHeros();
  }

  getAllHeros() {
    this.heros = this._HeroService.getAllHeros;
    this.herosFiltered = this.heros;
    return this.heros;
  }

  searchOnHeros(word) {
    this.herosFiltered = this.heros.filter((hero) =>
      hero.heroName.toLowerCase().includes(word.toLowerCase())
    );
  }

  sortOnHeros(sortFlag) {
    let sortBy = 'power';
    if(sortFlag) sortBy = 'heroName';
    this.herosFiltered.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }

  // unsubscribe all observables to  be garbage collectable for high performance ,no memory leaks
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}
