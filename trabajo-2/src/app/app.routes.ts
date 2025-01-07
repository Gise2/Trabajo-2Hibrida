import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { GestionCitasComponent } from './paginas/gestion-citas/gestion-citas.component';
import { ConfiguracionComponent } from './paginas/configuracion/configuracion.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'gestion-citas', component: GestionCitasComponent },
  { path: 'configuracion', component: ConfiguracionComponent }
];
