import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Sugar', 1),
    new Ingredient('Egg', 3),
    new Ingredient('Milk', 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addMultipleIngredients(ingredients: Ingredient[]) {
    // pensei em fazer com for, mas parece burro
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
