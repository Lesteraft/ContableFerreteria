import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-delete-proveedor',
  templateUrl: './delete-proveedor.component.html',
  styleUrls: ['./delete-proveedor.component.css']
})
export class DeleteProveedorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  eliminarProveedor() {

  }
  buscarProveedor() {
    if (
      (
        this.validar('#validationCustomProveedorD01') ||
        this.validar('#validationCustomProveedorD02') ||
        this.validar('#validationCustomProveedorD03')
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
