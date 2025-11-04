import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviarMensaje() {
    alert(`Mensaje enviado por ${this.nombre}`);
  }
}
