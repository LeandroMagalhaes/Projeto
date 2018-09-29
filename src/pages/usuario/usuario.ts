import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html'
})
export class UsuarioPage {  
  sexo;
  sexoForm;

  constructor() {
    this.sexoForm = new FormGroup({
      "sexo": new FormControl({value: 'F', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.sexoForm.value);
    event.preventDefault();
  }
}