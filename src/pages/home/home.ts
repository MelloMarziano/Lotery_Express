import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
  constructor(public navCtrl: NavController) {
  		//console.log(this.resultados);
  		//this.dividir();
  		//console.log(this.resultados.length);
  		var letras2=this.resultados;
  		//console.log(document.getElementById("nombres"));

  		$(document).ready(function(){
  			//<div class="circulito-resul"></div>
  			var numero=$(".resultado-numeros").length;
  			for(var i=0; i<numero;i++){
  				//console.log(i);
  				var letras=letras2[i].res.split(",");
  				for(var e=0;e<letras.length;e++){
  					//console.log(e);
  					$("."+letras2[i].nombre).append('<div class="circulito-resul">'+letras[e]+'</div>')
  				}
  				
  			}
  		})
  		
  }

  public cerrarSesion(){
  	this.navCtrl.push(LoginPage);
  }

  resultados=
  [
  	{
  		id:0,
  		nombre:"Loteka",
  		img:"assets/img/loteka.png",
  		fecha:"12/07/16",
  		res:"03,18,17,16,08"
  	},
  	{
  		id:1,
  		nombre:"Real",
  		img:"assets/img/real.png",
  		fecha:"12/07/16",
  		res:"04,09,12,04,01,02"
  	},
  	{
  		id:2,
  		nombre:"New_York_12_30",
  		img:"assets/img/loteryNY.jpg",
  		fecha:"12/07/16",
  		res:"05,04,12"
  	},
  	{
  		id:3,
  		nombre:"New_York_g",
  		img:"assets/img/loteryNY.jpg",
  		fecha:"12/07/16",
  		res:"00,04,12,09"
  	},
  	{
  		id:4,
  		nombre:"New_York_e",
  		img:"assets/img/loteryNY.jpg",
  		fecha:"12/07/16",
  		res:"00,04,12,09"
  	},
  	{
  		id:5,
  		nombre:"New_York_a",
  		img:"assets/img/loteryNY.jpg",
  		fecha:"12/07/16",
  		res:"00,04,12,09"
  	}
  ];

   letras=[];
    a=0;
    otra=[];
   
  public dividir(){
  	$("#probando").val("Hola mundo");
  }

  public saber(){
  	console.log(this.letras);
  }


}

//#1d4460 nuevo fondo azul

//#00fff1 nuevo color de letras








/*


<div class="contenido-resultados">
				<div class="resultados">
					<div class="listica" *ngFor="let res of resultados">
					
						<div class="img-listica">
							<img src="{{res.img}}" alt="" class="logo">
						</div>
						<div class="cont-listica">
							<div class="titulo-fecha">
								<span class="textoTituloFecha">{{res.nombre}}</span>
								<small class="textoTituloFecha">{{res.fecha}}</small>
							</div>
							<div class="resultado-numeros {{res.nombre}}">
								
							</div>
						</div>
					</div>
				</div>
			</div>







*/






/*



,
  	{
  		nombre:"Real",
  		img:"assets/img/real.png",
  		fecha:"12/07/16",
  		res:"05,04,12,04,01"
  	},
  	{
  		nombre:"New York 12:30",
  		img:"assets/img/loteryNY.jpg",
  		fecha:"12/07/16",
  		res:"05,04,12"
  	}


*/
