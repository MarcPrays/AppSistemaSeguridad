import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/inicio/acercade/acercade.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { ListaProductoComponent } from './lista-productos/lista-producto/lista-producto.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'productos', component: ListaProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
