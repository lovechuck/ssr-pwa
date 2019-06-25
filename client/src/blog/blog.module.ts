import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SearchComponent } from './pages/search.component';
import { ViewComponent } from './pages/view.component';
import { HttpClientModule } from '@angular/common/http';
import { service_providers } from './services/service-provider';

@NgModule({
  declarations: [SearchComponent, ViewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule
  ],
  providers: [...service_providers]
})
export class BlogModule { }
