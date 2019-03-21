import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// importar rutas
// rutas shared
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';

// rutas acceso
import { LoginComponent } from './components/body/acceso/login/login.component';
import { HomeComponent } from './components/body/acceso/home/home.component';

// rutas body izquierdo
import { CompraComponent } from './components/body/izquierdo/compra/compra.component';
import { ClientesComponent } from './components/body/izquierdo/clientes/clientes.component';
import { InventarioComponent } from './components/body/izquierdo/inventario/inventario.component';
import { ProveedoresComponent } from './components/body/izquierdo/proveedores/proveedores.component';
import { RecursosHumanosComponent } from './components/body/izquierdo/recursos-humanos/recursos-humanos.component';
import { VentaComponent } from './components/body/izquierdo/venta/venta.component';

// rutas body derecho
import { AddEmpleadoComponent } from './components/body/derecho/recursos-humanos/add-empleado/add-empleado.component';
import { EliminarEmpleadoComponent } from './components/body/derecho/recursos-humanos/eliminar-empleado/eliminar-empleado.component';
import { PlantillaComponent } from './components/body/derecho/recursos-humanos/plantilla/plantilla.component';
import { EmpleadoComponent } from './components/body/derecho/recursos-humanos/empleado/empleado.component';
import { AddClienteComponent } from './components/body/derecho/clientes/add-cliente/add-cliente.component';
import { EliminarClienteComponent } from './components/body/derecho/clientes/eliminar-cliente/eliminar-cliente.component';
import { ClienteComponent } from './components/body/derecho/clientes/cliente/cliente.component';
import { ProductosComponent } from './components/body/derecho/ventas/productos/productos.component';
import { AddProductoComponent } from './components/body/derecho/ventas/add-producto/add-producto.component';
import { EliminarProductoComponent } from './components/body/derecho/ventas/eliminar-producto/eliminar-producto.component';
import { OrdenCompraComponent } from './components/body/derecho/compra/orden-compra/orden-compra.component';
import { PeticionComponent } from './components/body/derecho/compra/orden-compra/peticion/peticion.component';
import { ProveedorCompraComponent } from './components/body/derecho/compra/orden-compra/proveedor-compra/proveedor-compra.component';
import { AniadirProveedorComponent } from './components/body/derecho/proveedores/aniadir-proveedor/aniadir-proveedor.component';
import { DeleteProveedorComponent } from './components/body/derecho/proveedores/delete-proveedor/delete-proveedor.component';
import { ExistenciaComponent } from './components/body/derecho/inventario/existencia/existencia.component';
import { IngresoMercaderiaComponent } from './components/body/derecho/inventario/ingreso-mercaderia/ingreso-mercaderia.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RecursosHumanosComponent,
    HomeComponent,
    AddEmpleadoComponent,
    EliminarEmpleadoComponent,
    PlantillaComponent,
    EmpleadoComponent,
    AddClienteComponent,
    EliminarClienteComponent,
    ClienteComponent,
    ProductosComponent,
    AddProductoComponent,
    EliminarProductoComponent,
    ProveedoresComponent,
    CompraComponent,
    OrdenCompraComponent,
    PeticionComponent,
    ProveedorCompraComponent,
    AniadirProveedorComponent,
    DeleteProveedorComponent,
    VentaComponent,
    ClientesComponent,
    InventarioComponent,
    ExistenciaComponent,
    IngresoMercaderiaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES , { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
