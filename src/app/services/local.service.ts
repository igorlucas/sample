import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Microregiao } from '../models/interfaceModels/microregiao';
import { Observable } from 'rxjs';
import { Mesorregiao } from '../models/interfaceModels/mesorregiao';
import { Regiao } from '../models/interfaceModels/regiao';
import { Estado } from '../models/interfaceModels/estado';
import { Municipio } from '../models/interfaceModels/municipio';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  //**<https://servicodados.ibge.gov.br/api/docs> */
  //**<https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-_> */
  constructor(private http: HttpClient) { }

  urlMicroregioes = "https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes";
  urlMessoregioes = "https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes";
  urlRegioes = "https://servicodados.ibge.gov.br/api/v1/localidades/regioes";
  urlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
  urlMunicipios = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios";

  getMicroregioes(): Observable<Microregiao[]> {
    return this.http.get<Microregiao[]>(this.urlMicroregioes);
  }

  getMesorregioes(): Observable<Mesorregiao[]> {
    return this.http.get<Mesorregiao[]>(this.urlMessoregioes);
  }

  getRegioes(): Observable<Regiao[]> {
    return this.http.get<Regiao[]>(this.urlRegioes);
  }

  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.urlEstados)
  }

  getMunicipios() :Observable<Municipio[]>{
    return  this.http.get<Municipio[]>(this.urlMunicipios);
  }

}
