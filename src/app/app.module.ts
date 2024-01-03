import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuarioCardComponent } from './components/usuario/usuario-card/usuario-card.component';
import { CreateUserComponent } from './components/usuario/create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUserComponent } from './components/usuario/list-user/list-user.component';
import { EditarUserComponent } from './components/usuario/editar-user/editar-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCardComponent,
    CreateUserComponent,
    ListUserComponent,
    EditarUserComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
