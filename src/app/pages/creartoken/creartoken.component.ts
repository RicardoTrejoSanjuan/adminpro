import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from 'src/app/services/middleware.service';

@Component({
  selector: 'app-creartoken',
  templateUrl: './Creartoken.component.html',
  styles: []
})
export class CreartokenComponent implements OnInit {

  public req: any;
  public res: any;

  constructor(
    private middle: MiddlewareService
  ) { }

  ngOnInit() {
  }

  onClickSubmit(data) {
    this.req = {};
    this.res = {};
    if (data.id_cliente === '' || data.id_cliente === null) {
      return 0;
    } else {
      this.req = {
        ticket: {
          id_user: data.id_cliente,
          id_creds: 'FRONT'
        },
        userId: data.id_cliente,
        unixTime: Math.round((new Date()).getTime() / 1000)
      };
      this.middle.post('crearToken', this.req)
        .then((result) => {
          this.res = result;
        }).catch((err) => {
          this.res = err;
        });
    }
  }

}
