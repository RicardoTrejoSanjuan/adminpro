import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {

  private httpOptions: any;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  public post(
    key: string,
    request?: any,
    isPublic?: boolean,
    hideModal?: boolean,
    hideSpinner?: boolean,
    viaInternet?: boolean,
    headers?: any) {

    let url: string = '';
    url = '' + endpoints[key];

    return this.httpClient.post(url, request, this.httpOptions)
      .toPromise().then((res: any) => {
        return res;
      });
  }

  public get(
    key: string,
    id: string
  ) {
    let url: string = '';
    url = '' + endpoints[key] + id;

    return this.httpClient.get(url, this.httpOptions)
      .toPromise().then((res: any) => {
        return res;
      });
  }
}
