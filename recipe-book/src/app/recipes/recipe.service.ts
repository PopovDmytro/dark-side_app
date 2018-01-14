import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Bunny', 'Bunny', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1', []),
    new Recipe('Third', 'Lorem ipsum', 'http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/2016/09/main/1101-chicken-fajitas-ck-1.jpg?itok=Uw45REAY', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
