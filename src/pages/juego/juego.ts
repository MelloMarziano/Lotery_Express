import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




//import { HomePage } from '../home/home';


import * as $ from 'jquery';



@IonicPage()
@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html',
})
export class JuegoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegoPage');
  }
  txtSaldo=10;
  seleccion="";
  paraCuadro=
  [
  	{
  		texto:"Nacional",
  		img:"assets/img/Lnacional.jpg",
  		numero:3
  	},
  	{
  		texto:"Loteka",
  		img:"assets/img/loteka.png",
  		numero:6
  	},
  	{
  		texto:"Loteria New York 7:30",
  		img:"assets/img/loteryNY.jpg",
  		numero:5
  	},
  	{
  		texto:"Loteria New York 12:30",
  		img:"assets/img/loteryNY.jpg",
  		numero:3
  	},
  	{
  		texto:"Quiniela",
  		img:"assets/img/quiniela.png",
  		numero:3
  	},
  	{
  		texto:"Real",
  		img:"assets/img/real.png",
  		numero:4
  	}

  ]

  subir(){
  	this.txtSaldo=this.txtSaldo+10;
  }

  bajar(){
  	if(this.txtSaldo==10){
  		alert("Este es el Minimo que puede jugar");
  	}else{
  		this.txtSaldo=this.txtSaldo-10;
  	}
  	
  }

  limpiar(){
  	this.seleccion=""
  	this.txtSaldo=10;
  }

  cancelar(){
  	this.seleccion=""
  	this.txtSaldo=10;
  	this.navCtrl.pop();
  }

  CambiarNombre(nombre,numero){
  	this.seleccion=nombre;
  	this.anja(numero);
  }

  anja(n){
  	var numero=n;
  	$(document).ready(function(){
  		$(".cuadritoG").remove();
  		for(var i=0;i<=numero-1;i++){
  			$(".arriba-dos").append('<div class="cuadritoG"> <input type="number" class="txtNumerito cuadritoG-'+i+' " maxlength="2"> </div>');

  		}
  		$(".cuadritoG-0").focus();
  	})
  }

}
