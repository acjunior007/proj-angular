import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato/model/contato';
import { ContatoService } from '../services/contato.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contato: Contato;
  contatos: Contato[];
  
  constructor(
    private contatoServices: ContatoService
  ) { }

  ngOnInit() {
    this.contato = new Contato();
    this.contatos = this.contatoServices.getAllContatos();
  }

  saveContato(form: NgForm){
    this.contato = form.value;
    console.log(this.contato);
    this.contato.id = new Date().getTime().toString();
    this.contatoServices.save(this.contato);
    this.contatos.push(this.contato);
    form.resetForm();
  }
}
