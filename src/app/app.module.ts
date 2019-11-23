import { SingletonRouterServiceService } from './service/singleton-router-service.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { SemAcessoComponent } from './sem-acesso/sem-acesso.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { AuthGuard } from './AuthGuard';
import { AuthService } from './AuthService';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CadastroClientesComponent,
    CadastroConcluidoComponent,
    SemAcessoComponent,
    LoginComponent,
    ModalComponent,
    HomeLogadaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()

  ],
  providers: [AuthGuard, AuthService, SingletonRouterServiceService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
