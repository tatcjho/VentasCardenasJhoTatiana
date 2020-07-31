import { Injectable } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { AngularFirestore } from '@angular/fire/firestore';
import {first, map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private afs: AngularFirestore) { }

  saveProducto(producto:Producto){
    const refEmpleo = this.afs.collection("producto");
    producto.uid = this.afs.createId()
    const param = JSON.parse(JSON.stringify(producto));
    refEmpleo.doc(producto.uid).set(param,{ merge:true});
  }

  getProductos(): Observable<any[]>{
    return this.afs.collection('producto').valueChanges();
  }

  getProducto(uid: string): Observable<any>{
    let itemDoc = this.afs.doc<any>(`producto/${uid}`);
    return itemDoc.valueChanges();
  }

  async getProductoById2(uid: string): Promise<Producto>{
    try{
        let aux:any = await this.afs.collection("producto", 
            ref => ref.where('uid', '==', uid))
                      .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                          return doc;
                      }).catch(error => {
                          throw error;
                      });
        if(aux.length==0)
            return undefined;
        return aux[0];
    }catch(error){
      console.error("Error", error);
      throw error;
    } 
  }


}
