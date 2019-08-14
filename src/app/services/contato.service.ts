import { Injectable } from '@angular/core';
import { LocalStorageService } from "angular-2-local-storage";
import { Contato } from '../contato/model/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  save(contato: Contato){
    this.localStorageService.set(contato.id, contato);
  }

  getContato(id: string): Contato{
    return this.localStorageService.get(id);
  }

  getAllContatos(): Contato[]{
    return this.localStorageService.keys().map(id => this.getContato(id));
  }
}
