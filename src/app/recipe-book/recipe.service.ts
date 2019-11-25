import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('First Item',
    'This is the first recipe',
    'https://picsum.photos/200',
    [
      new Ingredient('Carne', 1),
      new Ingredient('Batata', 20)
    ]),

    new Recipe('Second Item',
    'This is another recipe',
    'https://picsum.photos/300',
    [
      new Ingredient('Pão', 2),
      new Ingredient('Carne', 1)
    ])
  ];

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

}
