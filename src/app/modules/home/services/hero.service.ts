import { EventEmitter, Injectable } from "@angular/core";
import { Hero } from "../models/Hero";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  searchWord = new EventEmitter<string>();
  sortFlag = new EventEmitter<boolean>();
  constructor() {}
  heros: Hero[] = [
    { id: 1, heroName: "mohammed", rate: 3, power: "html css js angular " },
    { id: 2, heroName: "ahmed", rate: 4, power: "html css js react " },
    { id: 3, heroName: "salah", rate: 5, power: "html css js vue " },
  ];
  get getAllHeros() {
    return [...this.heros];
  }

  getHero(heroId: number) {
    return this.heros.find((hero) => hero.id === +heroId);
  }

  emitSearchWord(serarchWord: string): void {
    this.searchWord.next(serarchWord);
  }

  emitSortFlag(sortFlag: boolean): void {
    this.sortFlag.next(sortFlag);
  }
}
