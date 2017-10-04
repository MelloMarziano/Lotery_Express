import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController,Platform, AlertController } from 'ionic-angular';




//import { HomePage } from '../home/home';


import * as $ from 'jquery';



@IonicPage()
@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html',
})
export class JuegoPage {

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public action:ActionSheetController, 
  	public platform: Platform,
  	public alerta:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegoPage');
  }
  txtSaldo=1;
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
  	this.txtSaldo=this.txtSaldo+1;
  }

  bajar(){
  	if(this.txtSaldo==1){
  		let alert = this.alerta.create({
	      title: 'Minimo',
	      subTitle: 'Ups Este es el minimo que puedes jugar!!',
	      buttons: ['OK']
	    });
	    alert.present();
  	}else{
  		this.txtSaldo=this.txtSaldo-1;
  	}
  	
  }

  limpiar(){
  	this.seleccion=""
  	this.txtSaldo=1;
  	$(document).ready(function(){
  		$('.cuadritoG').remove();
  	})
  }

  cancelar(){
  	this.seleccion=""
  	this.txtSaldo=1;
  	this.navCtrl.pop();
  }

  CambiarNombre(nombre,numero){
  	this.seleccion=nombre;
  	this.anja();
  }

  llamarAction(){
  	var numero=0;

  	let actionsheet=this.action.create({
  		title:'Tipos de Jugada',
  		cssClass:'actionCSS',
  		buttons:[
  		{
  			text:'Numero',
  			icon:!this.platform.is('ios')? 'radio-button-on': null,
  			handler:()=>{
  				//console.log("Un Numero");
  				numero=1;
  				this.mostrarCuadros(numero);
  			}
  		},{
  			text:'Pale',
  			icon:!this.platform.is('ios')? 'radio-button-on': null,
  			handler:()=>{
  				//console.log('Pale');
  				numero=2;
  				this.mostrarCuadros(numero);
  			}
  		},{
  			text:'Tripleta',
  			icon:!this.platform.is('ios')? 'radio-button-on': null,
  			handler:()=>{
  				//console.log('Tripleta');
  				numero=3;
  				this.mostrarCuadros(numero);
  			}
  		},{
  			text:'Cancelar',
  			role:'cancel',
  			icon:!this.platform.is('ios')? 'close': null,
  			handler:()=>{
  				console.log('cancel');
  			}
  		}]
  	});

  	actionsheet.present();
  	
  }



  anja(){
  	

  	this.llamarAction();
  
  }

  mostrarCuadros(nNumero){
  	var numero=nNumero;
  	$(document).ready(function(){
  		$(".cuadritoG").remove();
  		for(var i=0;i<=numero-1;i++){
  			$(".arriba-dos").append('<div class="cuadritoG"> <input type="number" class="txtNumerito cuadritoG-'+i+' " maxlength="2"> </div>');

  		}
  		$(".cuadritoG-0").focus();
  	})
  }

}
