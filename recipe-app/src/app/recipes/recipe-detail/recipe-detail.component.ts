import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // const recipeName = this.route.snapshot.params['name'];
    // this.recipe = this.recipeService.getRecipe(recipeName);
    // console.log(`Recipe name ${this.recipe.name}`);
    // this.route.params.subscribe((params: Params) => {
    //   this.recipe = this.recipeService.getRecipe(params['name']);
    // });

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

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

  onEditRecipe() {
    // this.router.navigate(['edit'],{relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
    console.log('Shopping items now');
  }
}
