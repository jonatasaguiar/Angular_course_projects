import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schintzel',
      'A super tasty ...',
      'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chicken_schnitzel_with_fries_and_salad.jpg',
      [new Ingredient('meat', 1), new Ingredient('french fries', 20)]
    ),
    new Recipe(
      'Burguer',
      'What wlse you need to say?',
      'https://i.etsystatic.com/24305988/r/il/274a22/2462601398/il_794xN.2462601398_lsge.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
