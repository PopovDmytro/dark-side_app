import {NgModule} from "@angular/core";
// import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
//
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipesComponent} from "./index";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
//
import {recipesRouting} from "./recipes.routing";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    // CommonModule,
    SharedModule,
    ReactiveFormsModule,
    recipesRouting
  ]
})
export class RecipesModule {

}
