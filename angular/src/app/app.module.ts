import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxDateBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
