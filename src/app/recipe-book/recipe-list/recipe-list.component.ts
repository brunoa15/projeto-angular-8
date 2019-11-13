import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Item', 'This is the first recipe', 'https://picsum.photos/50'),
    new Recipe('First Item', 'This is the first recipe', 'https://picsum.photos/50')
  ];

  constructor() { }

  ngOnInit() {
  }

}
