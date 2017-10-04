import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the VentanaJuegoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ventana-juego',
  templateUrl: 'ventana-juego.html',
})
export class VentanaJuegoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController) {
  }

  datos={};
  titulo="";

  ionViewWillLoad() {
    //console.log('ionViewDidLoad VentanaJuegoPage');
    this.datos=this.navParams.get('nombre');
    console.log(this.datos);
    this.titulo=this.datos['name'];
    console.log(this.titulo)

  }

  cerrarModal(){
  	this.view.dismiss();
  }

}
