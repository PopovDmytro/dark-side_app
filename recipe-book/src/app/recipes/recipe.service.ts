import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
//
import { Recipe } from "./recipe";
import { Ingredient } from "../shared/ingredient";

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

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe (recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe (oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData () {
    const body = JSON.stringify(this.recipes);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  fetchData () {

  }

}
