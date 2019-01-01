import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('se ha dado click');
    if ((this.validacion('#txt-user') || this.validacion('#txt-password')) &&
        (this.validacion('#txt-user') && this.validacion('#txt-password'))) {
        console.log('se logró');
    }

  }


  validacion(id) {
    if ($(id).val() === '') {
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
