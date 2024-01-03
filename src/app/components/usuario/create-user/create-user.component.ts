import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormularioService } from 'src/app/services/formulario.service';
import { IUser } from 'src/app/types/IUser';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  form: FormGroup;
  usuarios!: IUser[];

  constructor(private formularioService: FormularioService) {
    this.form = this.formularioService.form;
  }

  criarUsuario() {
    if (this.form.valid) {
      this.formularioService.novoUsuario(this.form.value);
      this.form.reset();
    }
  }
}
