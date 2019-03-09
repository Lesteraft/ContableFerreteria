import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {

  re: any;

  constructor() { }

  ngOnInit() {
  }

  AgregarEmpleado() {
    if (
        (
          this.validar('#validationCustom01') ||
          this.validar('#validationCustom02') ||
          this.validarCorreos() ||
          this.validar('#validationCustom04') ||
          this.validar('#validationCustom05') ||
          this.validar('#validationCustom06') ||
          this.validar('#validationCustom07') ||
          this.validar('#validationCustom03') ||
          this.validar('#validationCustom09') ||
          this.validar('#validationCustom08')
          // this.validar('#validationCustomUsername')
        )
          &&
        (
          this.validar('#validationCustom01') &&
          this.validar('#validationCustom02')  &&
          this.validarCorreos() &&
          this.validar('#validationCustom04') &&
          this.validar('#validationCustom05') &&
          this.validar('#validationCustom06') &&
          this.validar('#validationCustom07') &&
          this.validar('#validationCustom08') &&
          this.validar('#validationCustom03')
          // this.validar('#validationCustomUsername')
        )
    ) {
        console.log('se logró');
      // aqui irá la petición ajax
    }
}

  validar(id) {
    if ($(id).val() === '' || $(id).val() === '-1'  ) {
        $(id).removeClass('is-valid');
        $(id).addClass('is-invalid');
        return false;
    } else {
        $(id).removeClass('is-invalid');
        $(id).addClass('is-valid');
        return true;
    }
  }


  validarCorreos() {
    this.re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.re.test( $('#validationCustomUsername').val())) {
           $('#validationCustomUsername').addClass('is-valid');
           $('#validationCustomUsername').removeClass('is-invalid');
            return true;
        } else {
            $('#validationCustomUsername').addClass('is-invalid');
            $('#validationCustomUsername').removeClass('is-valid');
            return false;
        }
  }

}
