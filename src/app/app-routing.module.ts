import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"Home", component:HomeComponent},
  {path:"About-Us", component:AboutUsComponent},
  {path:"Contact-Us", component:ContactUsComponent},
  {path:"favourites", component:FavouritesComponent},
  { path: '', pathMatch: 'full', redirectTo: 'favourites' },
  { path: 'serv1', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
