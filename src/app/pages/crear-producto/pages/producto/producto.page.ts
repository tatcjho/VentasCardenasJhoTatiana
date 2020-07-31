import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {ProductoService} from 'src/app/pages/crear-producto/producto.service'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  producto: Observable<any>;

  constructor(private ps: ProductoService,
    private route: ActivatedRoute) { }

    async ngOnInit() {
      const id = this.route.snapshot.paramMap.get("id")
      this.producto = this.ps.getProductos();
  }

}
