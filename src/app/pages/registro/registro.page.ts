import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ServiceService} from 'src/app/services/service.service'
import {User} from 'src/app/model/user'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user: User = new User();

  constructor(private authSvc : ServiceService, private router: Router) { }

  ngOnInit() {
  }

  registrar() {
    this.authSvc.onRegister(this.user);
  }




}
