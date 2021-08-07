import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';

//Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-PE'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    SalesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue:'es-PE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
