import { Component } from '@angular/core';
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

  public email: boolean = false;

  change(){
    console.log(this.email);
  }

  doSubmit(event) {
    console.log('Submitting form', this.sexoForm.value);
    event.preventDefault();
  }
}
