import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ConcatComponent } from './pages/concat.component';
import { AboutComponent } from './pages/about.component';
import { DefaultComponent } from './pages/default.component';
import { ServiceComponent } from './pages/service.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: DefaultComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'blog', loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule) },
  { path: 'photo', loadChildren: () => import('../photo/photo.module').then(m => m.PhotoModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
