// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // recipes: Recipe[] = [
  //   new Recipe(
  //     'A test recipe',
  //     'This is a simply test',
  //     'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg'
  //   ),
  //   new Recipe(
  //     'Another test recipe',
  //     'This is a simply test',
  //     'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg'
  //   ),
  // ];

  recipes: Recipe[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
