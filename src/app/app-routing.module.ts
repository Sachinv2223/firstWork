import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
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
  { path: 'comp1', component: Component1Component },
  { path: 'comp2', component: Component2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
