import { RouterModule, Routes } from '@angular/router';

import { ConsultaclienteComponent } from './pages/consultacliente/consultacliente.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { CerrarsesionComponent } from './pages/cerrarsesion/cerrarsesion.component';
import { CambiocontrasenaComponent } from './pages/cambiocontrasena/cambiocontrasena.component';
import { ActivartokenComponent } from './pages/activartoken/activartoken.component';
import { CreartokenComponent } from './pages/creartoken/creartoken.component';
import { LdapcrearComponent } from './pages/ldapcrear/ldapcrear.component';
import { LdapmodificarComponent } from './pages/ldapmodificar/ldapmodificar.component';


const appRoutes: Routes = [
    { path: 'Consultacliente', component: ConsultaclienteComponent },
    { path: 'CerrarSession', component: CerrarsesionComponent },
    { path: 'CambioContrasena', component: CambiocontrasenaComponent },
    { path: 'ActivarToken', component: ActivartokenComponent },
    { path: 'CrearToken', component: CreartokenComponent },
    { path: 'LdapCrear', component: LdapcrearComponent },
    { path: 'LdapModificar', component: LdapmodificarComponent },
    { path: '', component: ConsultaclienteComponent, pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });
