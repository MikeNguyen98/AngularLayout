import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ArcheryModule } from './archery/archery.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HomeModule,
		ArcheryModule,
		SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
