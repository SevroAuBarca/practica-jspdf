import { Routes } from '@angular/router';
import { ConstanciaComponent } from './constancia/constancia.component';
import { PortadaComponent } from './portada/portada.component';
import { RecetaComponent } from './receta/receta.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PortadaComponent,
  },
  {
    path: 'constancia',
    component: ConstanciaComponent,
  },
  {
    path: 'receta',
    component: RecetaComponent,
  },
];

export default appRoutes;
