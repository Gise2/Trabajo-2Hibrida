import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../servicios/citas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  citaAleatoria: { texto: string; autor: string } | null = null;

  constructor(private citasService: CitasService) {}

  async ngOnInit() {
    const citas = await this.citasService.obtenerTodasLasCitas();
    const indice = Math.floor(Math.random() * citas.length);
    this.citaAleatoria = citas[indice];
  }
}
