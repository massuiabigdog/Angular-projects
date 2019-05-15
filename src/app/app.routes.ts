import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { CrmComponent } from './crm/crm.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'project/:title', component: PostComponent
  },
  {
    path: 'project/:id-1', component: PostComponent
  },
  {
    path: 'crm', component: CrmComponent
  },
  {
    path: 'home', component: HomeComponent
  }

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);