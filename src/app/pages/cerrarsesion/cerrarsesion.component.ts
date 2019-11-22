import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from 'src/app/services/middleware.service';

@Component({
  selector: 'app-cerrarsesion',
  templateUrl: './cerrarsesion.component.html',
  styles: []
})
export class  CerrarsesionComponent implements OnInit {

  public req: any;
  public res: any;

  constructor(
    private middle: MiddlewareService
  ) {}

  ngOnInit() {
  }

  onClickSubmit(data) {
    this.req = '';
    this.res = '';
    if (data.id_cliente === '' || data.id_cliente === null) {
      return 0;
    } else {
      this.req = data.id_cliente;
      this.middle.get('cerrarSession', data.id_cliente)
      .then((result) => {
        this.res = result;
      }).catch((err) => {
        this.res = err;
      });
    }
  }

}
