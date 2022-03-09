import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ZsRecipeInfoModule, ZsTodosModule } from '@zerops/zestrat-angular';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    ZsTodosModule,
    ZsRecipeInfoModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
