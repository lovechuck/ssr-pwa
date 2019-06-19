import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about.component';
import { DefaultComponent } from './pages/default.component';
import { ServiceComponent } from './pages/service.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './pages/portfolio.component';
import { ContactComponent } from './pages/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PortfolioComponent,
    ServiceComponent,
    DefaultComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }