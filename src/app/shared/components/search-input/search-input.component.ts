import { Component, Input, OnInit } from '@angular/core';
// import { CATEGORY } from 'src/app/modules/home/models/Category';
// import { ProductsService } from 'src/app/modules/home/services/peoducts/products.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HeroService } from 'src/app/modules/home/services/hero.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  // @Input() categories: CATEGORY;
  @Input() searchInput: HTMLElement
  faSearch =faSearch;

  constructor(private _HeroService:HeroService) { }

  ngOnInit(): void {
  }

  //send event with category name to get all item in category
  sendCategoryName(catName) {
    // this._productsService.emetCategoryFilter(catName);
  }

  //saerch function
  sendSearchWord(word) {
    this._HeroService.emitSearchWord(word);

  }

  //handel list in emputy search input
  resetListOnEmptyStatus(word) {
    // !word ? this._productsService.emetSearchWord(word) : null;
  }








}
