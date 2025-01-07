import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from '../../servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  permitirEliminar = false;

  constructor(private configuracionService: ConfiguracionService) {}

  async ngOnInit() {
    this.permitirEliminar = (await this.configuracionService.obtenerConfiguracion('permitirEliminar')) || false;
  }

  async guardarConfiguracion() {
    await this.configuracionService.guardarConfiguracion('permitirEliminar', this.permitirEliminar);
  }
}
