// importaciones principales desde navBar
import { Routes } from '@angular/router';
import { HomeComponent } from './components/body/acceso/home/home.component';

import { CompraComponent } from './components/body/izquierdo/compra/compra.component';
import { ProveedoresComponent } from './components/body/izquierdo/proveedores/proveedores.component';
import { RecursosHumanosComponent } from './components/body/izquierdo/recursos-humanos/recursos-humanos.component';
import { VentaComponent } from './components/body/izquierdo/venta/venta.component';
import { ClientesComponent } from './components/body/izquierdo/clientes/clientes.component';
import { InventarioComponent } from './components/body/izquierdo/inventario/inventario.component';

// childRoutes from Recursos-Humanos
import { AddEmpleadoComponent } from './components/body/derecho/recursos-humanos/add-empleado/add-empleado.component';
import { EliminarEmpleadoComponent } from './components/body/derecho/recursos-humanos/eliminar-empleado/eliminar-empleado.component';
import { PlantillaComponent } from './components/body/derecho/recursos-humanos/plantilla/plantilla.component';
import { EmpleadoComponent } from './components/body/derecho/recursos-humanos/empleado/empleado.component';

// childRoutes from Ventas
import { AddProductoComponent } from './components/body/derecho/ventas/add-producto/add-producto.component';
import { EliminarProductoComponent } from './components/body/derecho/ventas/eliminar-producto/eliminar-producto.component';
import { ProductosComponent } from './components/body/derecho/ventas/productos/productos.component';

// childRoutes from Proveedores
import { AniadirProveedorComponent } from './components/body/derecho/proveedores/aniadir-proveedor/aniadir-proveedor.component';
import { DeleteProveedorComponent } from './components/body/derecho/proveedores/delete-proveedor/delete-proveedor.component';

// childRoutes from Compra
import { OrdenCompraComponent } from './components/body/derecho/compra/orden-compra/orden-compra.component';
import { PeticionComponent } from './components/body/derecho/compra/orden-compra/peticion/peticion.component';
import { ProveedorCompraComponent } from './components/body/derecho/compra/orden-compra/proveedor-compra/proveedor-compra.component';
import { EliminarOrdenComponent } from './components/body/derecho/compra/eliminar-orden/eliminar-orden.component';
import { VerificarOrdenComponent } from './components/body/derecho/compra/verificar-orden/verificar-orden.component';
import { PagoOrdenComponent } from './components/body/derecho/compra/pago-orden/pago-orden.component';

// childRoutes from Cliente
import { AddClienteComponent } from './components/body/derecho/clientes/add-cliente/add-cliente.component';
import { EliminarClienteComponent } from './components/body/derecho/clientes/eliminar-cliente/eliminar-cliente.component';
import { ClienteComponent } from './components/body/derecho/clientes/cliente/cliente.component';

// childRoutes from Inventario
import { ExistenciaComponent } from './components/body/derecho/inventario/existencia/existencia.component';
import { IngresoMercaderiaComponent } from './components/body/derecho/inventario/ingreso-mercaderia/ingreso-mercaderia.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'recursos-humanos',
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
            },
            {path: 'eliminar-orden', component: EliminarOrdenComponent},
            {path: 'verificar-orden', component: VerificarOrdenComponent},
            {path: 'pago-orden', component: PagoOrdenComponent},
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
    {   path: 'inventario',
        component: InventarioComponent,
        children: [
            {path: 'existencia', component: ExistenciaComponent},
            {path: 'ingreso-mercaderia', component: IngresoMercaderiaComponent},
        ]
    },
    { path: '' , pathMatch: 'full', redirectTo:  'home' },
    { path: '**' , pathMatch: 'full', redirectTo:  'home' }
];

