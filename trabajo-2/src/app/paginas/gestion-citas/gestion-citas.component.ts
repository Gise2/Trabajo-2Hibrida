import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../servicios/citas.service';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.css']
})
export class GestionCitasComponent implements OnInit {
  nuevaCita = { texto: '', autor: '' };
  citas: any[] = [];

  constructor(private citasService: CitasService) {}

  async ngOnInit() {
    this.citas = await this.citasService.obtenerTodasLasCitas();
  }

  async agregarCita() {
    if (this.nuevaCita.texto.trim().length >= 5 && this.nuevaCita.autor.trim().length >= 2) {
      await this.citasService.agregarCita(this.nuevaCita);
      this.citas = await this.citasService.obtenerTodasLasCitas();
      this.nuevaCita = { texto: '', autor: '' };
    }
  }

  async eliminarCita(id: number) {
    await this.citasService.eliminarCita(id);
    this.citas = await this.citasService.obtenerTodasLasCitas();
  }
}
