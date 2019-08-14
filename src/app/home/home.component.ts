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
    this.contato.id = (this.contato.id) ? this.contato.id : new Date().getTime().toString();
    this.contatoServices.save(this.contato);
    this.contatos = this.contatoServices.getAllContatos();
    form.resetForm();
  }
  edit(contato: Contato){
    this.contato = contato;
  }

  delete(contato: Contato){
    let index = this.contatos.map((item) => item.id).indexOf(contato.id);
    this.contatoServices.delete(contato);
    this.contatos.splice(index, 1);
  }
}
