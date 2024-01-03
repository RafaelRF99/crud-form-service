import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormularioService } from 'src/app/services/formulario.service';
import { IUser } from 'src/app/types/IUser';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.scss'],
})
export class EditarUserComponent implements OnInit {
  form!: FormGroup;
  @Input() usuario!: IUser;
  @Output() edicaoFinalizada = new EventEmitter();

  constructor(
    private formularioService: FormularioService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formularioService.form;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [this.usuario.nome],
      descricao: [this.usuario.descricao],
    });
  }

  editar() {
    this.formularioService.editarUsuario(this.usuario, this.form.value);
    this.edicaoFinalizada.emit();
    this.form.reset();
  }
}
