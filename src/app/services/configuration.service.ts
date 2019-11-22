import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

}

export enum endpoints {
  consultaPorID = '/consultaClientePorId',
  cerrarSession = 'http://10.160.121.85:3003/kill?u=',
  cerrarSessionQa = 'http://10.160.121.85:3003/killqa?u=',
  cambioPass = 'http://10.160.83.95:8080/passwordService/rest/changePassByRoot2',
  crearToken = 'http://multiva-esb-api-gateway-qa-esb-multiva-qa.apps.dev.openshift.multivaloresgf.local/tokenvirtual/crear',
  activarToken = 'http://multiva-esb-api-gateway-qa-esb-multiva-qa.apps.dev.openshift.multivaloresgf.local/tokenvirtual/activar',
}
