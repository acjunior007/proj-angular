import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contato } from '../contato/model/contato';
@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {

  @Input() contato: Contato;
  @Output() saveContato = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //this.contato = new Contato();
  }

  onSubmit(form: NgForm){
    this.saveContato.emit(form);
  }
}
