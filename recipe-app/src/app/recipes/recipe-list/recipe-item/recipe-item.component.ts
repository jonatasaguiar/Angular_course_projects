// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Recipe } from '../../recipe.model';

// @Component({
//   selector: 'app-recipe-item',
//   templateUrl: './recipe-item.component.html',
//   styleUrls: ['./recipe-item.component.css'],
// })
// export class RecipeItemComponent implements OnInit {
//   @Input('recipeElement') recipe: Recipe;
//   @Output() recipeSelected = new EventEmitter<void>();
//   constructor() {}

//   ngOnInit(): void {}

//   onSelected() {
//     this.recipeSelected.emit();
//   }
// }

import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeElement') recipe: Recipe;
  @Input() index: number;

  // constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
