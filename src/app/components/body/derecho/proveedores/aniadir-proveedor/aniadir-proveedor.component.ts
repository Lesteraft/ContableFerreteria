import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-aniadir-proveedor',
  templateUrl: './aniadir-proveedor.component.html',
  styleUrls: ['./aniadir-proveedor.component.css']
})
export class AniadirProveedorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  AniadirProveedor() {
    if (
      (
        this.validar('#validationCustomProveedor01') ||
        this.validar('#validationCustomProveedor02') ||
        this.validar('#validationCustomProveedor03') ||
        this.validar('#validationCustomProveedor04') ||
        this.validar('#validationCustomProveedor05') ||
        this.validar('#validationCustomProveedor06') ||
        this.validar('#validationCustomProveedor07') ||
        this.validar('#validationCustomProveedor08') ||
        this.validar('#validationCustomProveedor09') ||
        this.validar('#validationCustomProveedor10') ||
        this.validar('#validationCustomProveedor11') ||
        this.validar('#validationCustomProveedor12') ||
        this.validar('#validationCustomProveedor13') ||
        this.validar('#validationCustomProveedor14') ||
        this.validar('#validationCustomProveedor15')
      )
      &&
      (
        this.validar('#validationCustomProveedor01') &&
        this.validar('#validationCustomProveedor02') &&
        this.validar('#validationCustomProveedor03') &&
        this.validar('#validationCustomProveedor04') &&
        this.validar('#validationCustomProveedor05') &&
        this.validar('#validationCustomProveedor06') &&
        this.validar('#validationCustomProveedor07') &&
        this.validar('#validationCustomProveedor08') &&
        this.validar('#validationCustomProveedor09') &&
        this.validar('#validationCustomProveedor10') &&
        this.validar('#validationCustomProveedor11') &&
        this.validar('#validationCustomProveedor12') &&
        this.validar('#validationCustomProveedor13') &&
        this.validar('#validationCustomProveedor14') &&
        this.validar('#validationCustomProveedor15')
      )
    ) {
      console.log('se logró');
      // aqui irá la petición ajax
    }
  }

  validar(id) {
    if ($(id).val() === '' || $(id).val() === '-1') {
      $(id).removeClass('is-valid');
      $(id).addClass('is-invalid');
      return false;
    } else {
      $(id).removeClass('is-invalid');
      $(id).addClass('is-valid');
      return true;
    }
  }

}
