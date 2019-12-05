import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeComponent } from './comp/de/de.component';
import { D1Directive } from './dire/d1.directive';
import { D2Directive } from './dire/d2.directive';

@NgModule({
  declarations: [
    AppComponent,
    DeComponent,
    D1Directive,
    D2Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
