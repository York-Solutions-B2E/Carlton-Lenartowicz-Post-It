import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import { MultiplepostComponent } from './components/multiplepost/multiplepost.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglepostComponent,
    MultiplepostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
