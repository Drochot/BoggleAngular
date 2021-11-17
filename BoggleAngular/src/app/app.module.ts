import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BoggleComponent } from './boggle/boggle.component';
import { DieComponent } from './die/die.component';

@NgModule({
  declarations: [
    AppComponent,
    BoggleComponent,
    DieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
