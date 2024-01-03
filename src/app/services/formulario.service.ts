import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '../types/IUser';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  form!: FormGroup;
  usuarios: IUser[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: [null],
      descricao: [null],
    });
  }

  todosUsuarios() {
    return this.usuarios;
  }

  novoUsuario(usuario: IUser) {
    this.usuarios.push({ ...usuario });
  }

  editarUsuario(usuarioExistente: IUser, usuarioAtualizado: IUser) {
    const index = this.usuarios.findIndex(
      (usuario) => usuario === usuarioExistente
    );
    if (index !== -1) {
      this.usuarios[index] = { ...usuarioExistente, ...usuarioAtualizado };
    }
  }
}
