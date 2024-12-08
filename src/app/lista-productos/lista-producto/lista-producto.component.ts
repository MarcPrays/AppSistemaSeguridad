import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-lista-producto',
  standalone: false,
  
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent implements OnInit {
  productos : Producto[] = []
  constructor(private _productoService : ProductoService){

  }

  ngOnInit(): void {
    this.productos = this._productoService.getProductos()
    
  }
}
