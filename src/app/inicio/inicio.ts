import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  desarrollador: string = 'Joseph Montoya';
  version: string = '1.0.0';
  fecha: string = 'Octubre 2025';

  mostrarInformacion() {
    alert(`Desarrollado por: ${this.desarrollador}\nVersión: ${this.version}\nFecha: ${this.fecha}`);
  }

  cambiarDesarrollador() {
    this.desarrollador = 'Carlos Rodriguez';
  }
}
