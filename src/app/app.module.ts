import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { HeaderComponent } from './header/header.component';
import { ConstanciaComponent } from './constancia/constancia.component';
import { RecetaComponent } from './receta/receta.component';
import appRoutes from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    HeaderComponent,
    ConstanciaComponent,
    RecetaComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
