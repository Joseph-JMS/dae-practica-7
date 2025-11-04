import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  protected titulo = 'Pagina de Inicio';

  cambiarInfo() {
    this.titulo = '¡Bienvenidos a Angular!';
  }
}
