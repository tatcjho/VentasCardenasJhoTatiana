import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ServiceService} from 'src/app/services/service.service'
import {User} from 'src/app/model/user'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  constructor(private authSvc : ServiceService, private router: Router) { }

  ngOnInit() {
  }

  
  login() {
    this.authSvc.onLogin(this.user);
  }


}
