import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ProductoService} from '../crear-producto/producto.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  producto: Observable<any>;

  constructor(private ps: ProductoService,private route: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.producto = this.ps.getProducto(id);
      
   console.log("observable",this.producto);
    
   this.producto.subscribe(data => {
    console.log("suscribe",data);

  })


  let auxProducto = await this.ps.getProductoById2(id);
   console.log("await", auxProducto.precio);
  }

}
