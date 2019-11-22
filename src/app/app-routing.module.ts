import { SemAcessoComponent } from './sem-acesso/sem-acesso.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { LoginComponent } from './login/login.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'cadastro-concluido', component: CadastroConcluidoComponent },
  { path: 'sem-acesso', component: SemAcessoComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
