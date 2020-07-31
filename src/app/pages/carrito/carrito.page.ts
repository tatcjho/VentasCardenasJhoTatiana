import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {


  
  constructor(private llamar: CallNumber) { }

  ngOnInit() {
  }

  call(numero)
  {
    this.llamar.callNumber('0995981001', true);
  }

}
