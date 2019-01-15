import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importar rutas

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RecursosHumanosComponent } from './components/body/recursos-humanos/recursos-humanos.component';
import { HomeComponent } from './components/body/home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AddEmpleadoComponent } from './components/recursos-humanos/add-empleado/add-empleado.component';
import { EliminarEmpleadoComponent } from './components/recursos-humanos/eliminar-empleado/eliminar-empleado.component';
import { PlantillaComponent } from './components/recursos-humanos/plantilla/plantilla.component';
import { EmpleadoComponent } from './components/recursos-humanos/empleado/empleado.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { AddClienteComponent } from './components/ventas/add-cliente/add-cliente.component';
import { EliminarClienteComponent } from './components/ventas/eliminar-cliente/eliminar-cliente.component';
import { ClienteComponent } from './components/ventas/cliente/cliente.component';
import { ProductosComponent } from './components/ventas/productos/productos.component';
import { AddProductoComponent } from './components/ventas/add-producto/add-producto.component';
import { EliminarProductoComponent } from './components/ventas/eliminar-producto/eliminar-producto.component';


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
    VentasComponent,
    AddClienteComponent,
    EliminarClienteComponent,
    ClienteComponent,
    ProductosComponent,
    AddProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES , { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
