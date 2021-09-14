import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  faPhone,
  faEnvelope,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
// import { CATEGORY } from 'src/app/modules/home/models/Category';
import { HeaderService } from "../../services/header.service";
// import { CartService } from '../../../modules/home/services/cart.service';
// import { Store } from '@ngrx/store';
// import { User } from '../../../modules/home/models/User';
import { Subscription } from "rxjs";
import { HeroService } from "src/app/modules/home/services/hero.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent  {

  constructor(private _HeroService: HeroService) {}

  toggleEditable(event) {
    this._HeroService.emitSortFlag(event.target.checked);
  }
}
