import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sem-acesso',
  templateUrl: './sem-acesso.component.html',
  styleUrls: ['./sem-acesso.component.css']
})
export class SemAcessoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarParaCadastro() {
    this.router.navigate(['cadastro-clientes']);
  }

}
