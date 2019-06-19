import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { SearchComponent } from './pages/search.component';
import { ViewComponent } from './pages/view.component';

@NgModule({
  declarations: [SearchComponent, ViewComponent],
  imports: [
    CommonModule,
    PhotoRoutingModule
  ]
})
export class PhotoModule { }
