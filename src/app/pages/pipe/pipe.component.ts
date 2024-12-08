import { Component } from '@angular/core';
import { Producto } from '../../models/producto.models';

@Component({
  selector: 'app-pipe',
  standalone: false,
  
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent  {
  nombre : string = 'Mi nombre es Marcos'
  porcentaje : number = 0.85
  fecha: Date = new Date();
  precio: number = 1234.56;

  productos:Producto[]=[];
}
