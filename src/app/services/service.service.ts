import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'src/app/model/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public isLogged: any= false;
  constructor(public afAuth: AngularFireAuth,private angularFirestore: AngularFirestore, private alertController: AlertController, private router: Router) {
    afAuth.authState.subscribe(user =>(this.isLogged = user));
   }

   async onRegister(user: User) {
    try{
      const pac = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      user.uid = pac.user.uid;
      const param = JSON.parse(JSON.stringify(user));
      this.angularFirestore.collection('usuarios').doc(pac.user.uid).set(param);
      return pac;
    } catch (error) {
      console.log('Error on register user', error);
      return error;
    }
  }

   // IniciarSesion
   async onLogin(user: User) {
    try{
      const us = await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
      this.router.navigateByUrl('productos');
    } catch (error) {
      this.presentAlert(error.message);
    }
  }

  // Mostrar alertas
  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error al iniciar sesión',
      subHeader: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  cerrarSesion() {
    try{
      this.afAuth.signOut();
      this.router.navigateByUrl('login');
    } catch (error) {
      console.log(error);
    }

  }

  

  

}
