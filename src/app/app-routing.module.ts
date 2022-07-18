import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BtnCompComponent } from './btn-comp/btn-comp.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path:"Home", component:HomeComponent},
  // {path:"About-Us", component:AboutUsComponent},
  // {path:"Contact-Us", component:ContactUsComponent},
  // {path:"favourites", component:FavouritesComponent},
  // { path: '', pathMatch: 'full', redirectTo: 'favourites' },
  // { path: 'serv1', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule )}
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  { path: 'comp3', component: Comp3Component },
  { path: 'btn', component: BtnCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
