import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  // onAddToShoppingList() {
  //   for (let ingredient of this.recipe.ingredients) {
  //     console.log(ingredient.name + ' - ' + ingredient.amount);
  //     const ingredientName: string = ingredient.name;
  //     const ingredientAmount: number = ingredient.amount;
  //     const newIngredient = new Ingredient(ingredientName, ingredientAmount);
  //     this.shoppingListService.addIngredient(newIngredient);
  //   }
  //   console.log('Shopping items now');
  // }
  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
    console.log('Shopping items now');
  }
}
