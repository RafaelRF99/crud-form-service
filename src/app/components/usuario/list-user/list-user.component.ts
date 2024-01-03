import { Component } from '@angular/core';
import { FormularioService } from 'src/app/services/formulario.service';
import { IUser } from 'src/app/types/IUser';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent {
  usuarios: IUser[];

  statusEditar: boolean = false;
  usuarioSelecionado!: IUser;

  constructor(private formularioService: FormularioService) {
    this.usuarios = this.formularioService.todosUsuarios();
  }

  editar(usuario: IUser) {
    this.statusEditar = true;
    this.usuarioSelecionado = usuario;
  }

  concluir() {
    this.statusEditar = false;
  }
}
