import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/inicio/acercade/acercade.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { PipeComponent } from './pages/pipe/pipe.component';
import { ListaProductoComponent } from './lista-productos/lista-producto/lista-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercadeComponent,
    NavbarComponent,
    CapitalizadoPipe,
    PipeComponent,
    ListaProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
