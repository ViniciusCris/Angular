import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursoAtual: string = " ";

  curso:any = {

    nome: null,
    descricao: null,
    email: null
    }


  constructor() { }

  ngOnInit() {
  }
  CursoAlternado(valor: string) {
    if (valor == 'Desenvolvimento') {
      return this.cursoAtual = valor;
    }
    if (valor == 'redes') {
      return this.cursoAtual = valor;
    }
    return this.cursoAtual = " ";
  }

  onSubmit(formulario: NgForm) {
    console.log(formulario);

    console.log('----Valordes do formulário');
    console.log(formulario.form.value);

    console.log('Valor do Objeto');
    console.log(this.curso);
  }
}
