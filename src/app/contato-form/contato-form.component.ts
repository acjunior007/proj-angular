import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contato } from '../contato/model/contato';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {

  contato: Contato;
  constructor(
    private contatoServices: ContatoService
  ) { }

  ngOnInit() {
    this.contato = new Contato();
  }

  onSubmit(form: NgForm){
    this.contato = form.value;
    console.log(this.contato);
    this.contato.id = new Date().getTime().toString();
    this.contatoServices.save(this.contato);
  }
}
