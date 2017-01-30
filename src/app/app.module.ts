import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, FileSelectDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
