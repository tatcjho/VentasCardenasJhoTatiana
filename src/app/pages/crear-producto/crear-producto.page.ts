import { Component, OnInit } from '@angular/core';
import { ProductosPage } from '../productos/productos.page';
import {Producto} from '../../model/producto'
import {ProductoService} from '../crear-producto/producto.service'

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
})
export class CrearProductoPage implements OnInit {


  producto: Producto = new Producto();

  constructor(private ps: ProductoService) { }

  ngOnInit() {
  }

  async guardarProducto(){
    console.log(this.producto);
    this.ps.saveProducto(this.producto);
    
    //let number = await this.ms.    .saveEmpleado2(this.empleo);
    //console.log("Nuevo Registro de medicamento almacenado", number);
    //this.empleoService.saveEmpleo(this.empleo);
  }

  

}
