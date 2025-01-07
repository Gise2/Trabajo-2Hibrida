import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  async guardarConfiguracion(clave: string, valor: any) {
    await Preferences.set({ key: clave, value: JSON.stringify(valor) });
  }

  async obtenerConfiguracion(clave: string) {
    const { value } = await Preferences.get({ key: clave });
    return value ? JSON.parse(value) : null;
  }
}

