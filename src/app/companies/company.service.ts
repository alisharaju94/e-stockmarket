import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Company } from './company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {

  onCompanyLoad: Subject<Company[]> = new Subject();
  private companies: Company[] = [];

  getCompanies() {
    return this.companies.slice();
  }

  setCompanies(companies: Company[]) {
    this.companies = companies;
    this.onCompanyLoad.next(this.companies.slice());
  }

  // addIngrediantToShoppingList(companies: Company[]) {
  //   this.stockMarketService.registerCompany(companies);
  // }

  getCompany(code: String) {
    return this.companies.find((item) => item.comCode === code);
  }

  // updateRecipe(id: number, recipe: RecipeModel) {
  //   this.recipes.forEach((item) => {
  //     if (item.id == id) {
  //       item.name = recipe.name;
  //       item.description = recipe.description;
  //       item.imagePath = recipe.imagePath;
  //       item.ingrediants = recipe.ingrediants;
  //     }
  //   });
  //   this.onRecipeEdit.next(this.recipes.slice());
  // }

  // addRecipe(recipe: RecipeModel) {
  //   this.recipes.push(recipe);
  //   this.onRecipeEdit.next(this.recipes.slice());
  // }

  // onDelete(index: number) {
  //   this.recipes.splice(index-1, 1);
  //   this.onRecipeEdit.next(this.recipes.slice());
  // }
}
