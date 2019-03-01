// importaciones principales desde navBar
import { Routes } from '@angular/router';
import { CompraComponent } from './components/body/compra/compra.component';
import { HomeComponent } from './components/body/home/home.component';
import { ProveedoresComponent } from './components/body/proveedores/proveedores.component';
import { RecursosHumanosComponent } from './components/body/recursos-humanos/recursos-humanos.component';
import { VentaComponent } from './components/body/venta/venta.component';
import { ClientesComponent } from './components/body/clientes/clientes.component';

// childRoutes from Recursos-Humanos
import { AddEmpleadoComponent } from './components/recursos-humanos/add-empleado/add-empleado.component';
import { EliminarEmpleadoComponent } from './components/recursos-humanos/eliminar-empleado/eliminar-empleado.component';
import { PlantillaComponent } from './components/recursos-humanos/plantilla/plantilla.component';
import { EmpleadoComponent } from './components/recursos-humanos/empleado/empleado.component';

// childRoutes from Ventas
import { AddProductoComponent } from './components/ventas/add-producto/add-producto.component';
import { EliminarProductoComponent } from './components/ventas/eliminar-producto/eliminar-producto.component';
import { ProductosComponent } from './components/ventas/productos/productos.component';

// childRoutes from Proveedores
import { AniadirProveedorComponent } from './components/proveedores/aniadir-proveedor/aniadir-proveedor.component';
import { DeleteProveedorComponent } from './components/proveedores/delete-proveedor/delete-proveedor.component';

// childRoutes from Compra
import { OrdenCompraComponent } from './components/compra/orden-compra/orden-compra.component';
import { PeticionComponent } from './components/compra/orden-compra/peticion/peticion.component';
import { ProveedorCompraComponent } from './components/compra/orden-compra/proveedor-compra/proveedor-compra.component';

// chlidRoutes from Cliente
import { AddClienteComponent } from './components/clientes/add-cliente/add-cliente.component';
import { EliminarClienteComponent } from './components/clientes/eliminar-cliente/eliminar-cliente.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';

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
        component: VentaComponent,
        children: [
            {path: 'add-producto', component: AddProductoComponent},
            {path: 'eliminar-producto', component: EliminarProductoComponent},
            {path: 'producto', component: ProductosComponent},
        ]
    },
    {   path: 'proveedores',
        component: ProveedoresComponent,
        children: [
            {path: 'add-proveedor', component: AniadirProveedorComponent},
            {path: 'eliminar-proveedor', component: DeleteProveedorComponent}
        ]
    },
    {   path: 'compra',
        component: CompraComponent,
        children: [
            {   path: 'orden-compra',
                component: OrdenCompraComponent,
                children: [
                    {path: 'peticion-compra', component: PeticionComponent},
                    {path: 'proveedor-compra', component: ProveedorCompraComponent}
                ]
            }
        ]
    },
    {   path: 'clientes',
        component: ClientesComponent,
        children: [
            {path: 'add-cliente', component: AddClienteComponent},
            {path: 'eliminar-cliente', component: EliminarClienteComponent},
            {path: 'cliente', component: ClienteComponent},
        ]
    },
    { path: '' , pathMatch: 'full', redirectTo:  'home' },
    { path: '**' , pathMatch: 'full', redirectTo:  'home' }
];

