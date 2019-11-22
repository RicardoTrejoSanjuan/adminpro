import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from 'src/app/services/middleware.service';

@Component({
  selector: 'app-ldapcrear',
  templateUrl: './ldapcrear.component.html',
  styles: []
})
export class LdapcrearComponent implements OnInit {

  public req: any;
  public res: any;

  constructor(
    private middle: MiddlewareService
  ) {}

  ngOnInit() {
  }

  onClickSubmit(data) {
    this.req = {};
    this.res = {};
    if (data.id_cliente === '' || data.id_cliente === null) {
      return 0;
    } else {
      if (data.email === '' || data.email === null || data.phone === '' || data.phone === null) {
        this.req = {
          id_cliente: data.id_cliente
        };
      } else {
        this.req = {
          id_cliente: data.id_cliente,
          email: data.email,
          phone: data.phone
        };
      }
      console.log(this.req);
      this.middle.post('consultaPorID', this.req)
      .then((result) => {
        this.res = result;
      }).catch((err) => {
        this.res = err;
      });
    }
  }

}
