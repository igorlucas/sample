import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultViaCep } from '../models/interfaceModels/resultViaCep';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
//**<https://viacep.com.br/> */

  private url = "https://viacep.com.br/ws";
  private formats = ["json","jsonp","xml","piped","querty"]; 
  
  constructor(private http: HttpClient) { }

    getResultCep(cep: string): 
    Observable<ResultViaCep> 
    {
      return this.http.get<any>(`${this.url}/${cep}/${this.formats[0]}`);
    }

    getCep(uf, cidade, logradouro): 
    Observable<ResultViaCep[]> 
    {
      return this.http.get<any[]>(`${this.url}/${uf}/${cidade}/${logradouro}/${this.formats[0]}`);
    }
}
