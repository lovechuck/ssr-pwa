import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './pages/search.component';
import { ViewComponent } from './pages/view.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'view', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
