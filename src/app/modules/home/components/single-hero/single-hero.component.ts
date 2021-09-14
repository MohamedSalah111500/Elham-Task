import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { HeroService } from "../../services/hero.service";

@Component({
  selector: "app-single-hero",
  templateUrl: "./single-hero.component.html",
  styleUrls: ["./single-hero.component.scss"],
})
export class SingleHeroComponent implements OnInit {
  hero: any;
  faUser = faUser;
  constructor(
    private _activedRoute: ActivatedRoute,
    private _HeroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHero(this._activedRoute.snapshot.params["id"]);
  }

  getHero(id) {
    this.hero = this._HeroService.getHero(id);
    console.log(this.hero);
  }
}
