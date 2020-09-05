import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { MybtnComponent } from './mybtn/mybtn.component';
import { SliderDirective } from './mybtn/slider.directive';
import { SlidusComponent } from './mybtn/slidus/slidus.component';

@NgModule({
  declarations: [
    AppComponent,
    MybtnComponent,
    SliderDirective,
    SlidusComponent,
  ],
  imports: [BrowserModule, MatButtonModule, MatSlideToggleModule, MatButtonToggleModule],
  exports: [MatButtonModule, MatSlideToggleModule, MatButtonToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
