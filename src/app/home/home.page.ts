import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {
  eventos: { nombre: string | null; fecha_i: string | null; ubicacion: string | null; confirmacion: boolean; fecha_f: string | null, nombreE: string |null, telefonoE: string | null }[] = [];

  evento = new FormGroup({
    nombre: new FormControl('', Validators.required),
    fecha_i: new FormControl('', Validators.required),
    fecha_f: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required),
    nombreE: new FormControl(''),
    telefonoE: new FormControl('')
  });

  nEvento(){
    if (this.evento.valid && this.evento.value.fecha_i! < this.evento.value.fecha_f! && this.evento.value.telefonoE! <= '10000000000') {
      const nuevoEvento = {
        nombre: this.evento.value.nombre!,
        fecha_i: this.evento.value.fecha_i!,
        fecha_f: this.evento.value.fecha_f!,
        ubicacion: this.evento.value.ubicacion!,
        nombreE: this.evento.value.nombreE!,
        telefonoE: this.evento.value.telefonoE!,
        confirmacion: false
      };

      this.eventos.push(nuevoEvento);

      this.evento.reset();
    }
  }

  constructor(){}
}