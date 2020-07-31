import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ProductoService} from '../crear-producto/producto.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: Observable<any[]>
  productos2: any[];
  cosas:any = new Array;

  constructor(private ps: ProductoService,public router: Router ) { }

  ngOnInit() {
    this.productos =  this.ps.getProductos();
  }

  showProducto(id: any){
    this.router.navigate([`producto/${id}`])

  }

   //Se utiliza cuando se tenga una lista observable asincrona
   trackByFn(index,obj){
    return obj.uid;
  }

  showCrearEmpleo(){
    this.router.navigate([`crear-producto`])
  }



}
