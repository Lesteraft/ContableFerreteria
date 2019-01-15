// importaciones principales desde navBar
import { Routes } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { RecursosHumanosComponent } from './components/body/recursos-humanos/recursos-humanos.component';


// childRoutes from Recursos-Humanos
import { AddEmpleadoComponent } from './components/recursos-humanos/add-empleado/add-empleado.component';
import { EliminarEmpleadoComponent } from './components/recursos-humanos/eliminar-empleado/eliminar-empleado.component';
import { PlantillaComponent } from './components/recursos-humanos/plantilla/plantilla.component';
import { EmpleadoComponent } from './components/recursos-humanos/empleado/empleado.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AddClienteComponent } from './components/ventas/add-cliente/add-cliente.component';
import { EliminarClienteComponent } from './components/ventas/eliminar-cliente/eliminar-cliente.component';
import { ClienteComponent } from './components/ventas/cliente/cliente.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'recursos-humanos',
        component: RecursosHumanosComponent,
        children: [
            {path: 'add-empleado', component: AddEmpleadoComponent},
            {path: 'eliminar-empleado', component: EliminarEmpleadoComponent},
            {path: 'plantilla', component: PlantillaComponent},
            {path: 'empleado', component: EmpleadoComponent}
            // {path: '', component: RecursosHumanosInstruccionesComponent}
            // {path: '**', component: NotFoundComponent}
        ]
    },
    {
        path: 'ventas',
        component: VentasComponent,
        children: [
            {path: 'add-cliente', component: AddClienteComponent},
            {path: 'eliminar-cliente', component: EliminarClienteComponent},
            {path: 'cliente', component: ClienteComponent}
        ]
    },
    { path: '' , pathMatch: 'full', redirectTo:  'home' },
    { path: '**' , pathMatch: 'full', redirectTo:  'home' }
];

