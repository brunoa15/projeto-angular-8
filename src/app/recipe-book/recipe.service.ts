import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First Item', 'This is the first recipe', 'https://picsum.photos/200'),
    new Recipe('Second Item', 'This is another recipe', 'https://picsum.photos/300')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
