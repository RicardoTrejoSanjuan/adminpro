import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';

import { ConsultaclienteComponent } from './pages/consultacliente/consultacliente.component';
import { CerrarsesionComponent } from './pages/cerrarsesion/cerrarsesion.component';
import { CambiocontrasenaComponent } from './pages/cambiocontrasena/cambiocontrasena.component';
import { ActivartokenComponent } from './pages/activartoken/activartoken.component';
import { CreartokenComponent } from './pages/creartoken/creartoken.component';
import { LdapcrearComponent } from './pages/ldapcrear/ldapcrear.component';
import { LdapmodificarComponent } from './pages/ldapmodificar/ldapmodificar.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,

    ConsultaclienteComponent,
    CerrarsesionComponent,
    CambiocontrasenaComponent,
    ActivartokenComponent,
    CreartokenComponent,
    LdapcrearComponent,
    LdapmodificarComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
