import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentanaJuegoPage } from './ventana-juego';

@NgModule({
  declarations: [
    VentanaJuegoPage,
  ],
  imports: [
    IonicPageModule.forChild(VentanaJuegoPage),
  ],
})
export class VentanaJuegoPageModule {}
