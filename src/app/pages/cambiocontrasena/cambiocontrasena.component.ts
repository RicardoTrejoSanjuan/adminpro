import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from 'src/app/services/middleware.service';

@Component({
  selector: 'app-cambiocontrasena',
  templateUrl: './cambiocontrasena.component.html',
  styles: []
})
export class CambiocontrasenaComponent implements OnInit {

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
    if (data.user === '' || data.user === null || data.password === '' || data.password === null) {
      return 0;
    } else {
      this.req = {
        usuario: data.user,
        password: data.password
      };
      this.middle.post('cambioPass', this.req)
      .then((result) => {
        this.res = result;
      }).catch((err) => {
        this.res = err;
      });
    }
  }

}
