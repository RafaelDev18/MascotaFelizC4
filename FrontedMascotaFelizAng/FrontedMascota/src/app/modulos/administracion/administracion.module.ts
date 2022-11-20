import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { CrearProductoPlanComponent } from './productosPlanes/crear-producto-plan/crear-producto-plan.component';
import { BuscarProductoPlanComponent } from './productosPlanes/buscar-producto-plan/buscar-producto-plan.component';
import { EditarProductoPlanComponent } from './productosPlanes/editar-producto-plan/editar-producto-plan.component';
import { EliminarProductoPlanComponent } from './productosPlanes/eliminar-producto-plan/eliminar-producto-plan.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { CrearSolicitudAfiComponent } from './solicitudesAfi/crear-solicitud-afi/crear-solicitud-afi.component';
import { BuscarSolicitudAfiComponent } from './solicitudesAfi/buscar-solicitud-afi/buscar-solicitud-afi.component';
import { EditarSolicitudAfiComponent } from './solicitudesAfi/editar-solicitud-afi/editar-solicitud-afi.component';
import { EliminarSolicitudAfiComponent } from './solicitudesAfi/eliminar-solicitud-afi/eliminar-solicitud-afi.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    BuscarUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    CrearProductoPlanComponent,
    BuscarProductoPlanComponent,
    EditarProductoPlanComponent,
    EliminarProductoPlanComponent,
    CrearSucursalComponent,
    BuscarSucursalComponent,
    EditarSucursalComponent,
    EliminarSucursalComponent,
    CrearSolicitudAfiComponent,
    BuscarSolicitudAfiComponent,
    EditarSolicitudAfiComponent,
    EliminarSolicitudAfiComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
