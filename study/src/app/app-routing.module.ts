import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
//
//import {CreateCharacterComponent} from "./create-character/create-character.component";
import {TabsComponent} from "./tabs/tabs.component";
import {ListComponent} from "./list/list.component";
import {CreateCharacterModule} from "./create-character/create-character.module";
//
const routes = [
  {path: 'characters', component: TabsComponent, children: [
      {path: '', redirectTo: 'all', pathMatch: 'full' },
      {path: ':side', component: ListComponent }
    ] },
  // {path: 'new-character', component: CreateCharacterComponent },
  // {path: 'new-character', loadChildren: './create-character/create-character.module.ts#CreateCharacterModule' },
  {path: 'new-character', loadChildren: () => CreateCharacterModule },
  {path: '**', redirectTo: '/characters' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
