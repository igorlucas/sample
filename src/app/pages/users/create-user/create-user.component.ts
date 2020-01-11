import { Component, OnInit } from '@angular/core';
import { ResultViaCep } from 'src/app/models/interfaceModels/resultViaCep';
import { ViaCepService } from 'src/app/services/via-cep.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  uf;
  cidade;
  logradouro;
  cep: any;
  ceps: ResultViaCep[];
  resultViaCep: ResultViaCep;
  constructor(private viaCepService: ViaCepService) { }

  ngOnInit() {
  }

  loadResultCep() {
    this.viaCepService.getResultCep(this.cep).subscribe(res => {
      this.resultViaCep = res;
      console.log(this.resultViaCep);
    });
  }

  loadCep() {
    this.viaCepService.getCep(this.uf, this.cidade, this.logradouro).subscribe(res => {
      this.ceps = res;
      console.log(this.ceps);
    });;
  }


}
