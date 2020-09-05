import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { MybtnComponent } from './mybtn/mybtn.component';

@NgModule({
  declarations: [AppComponent, MybtnComponent],
  imports: [BrowserModule, MatButtonModule],
  exports: [MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
