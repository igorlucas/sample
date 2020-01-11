import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { Municipio } from 'src/app/models/interfaceModels/municipio';

@Component({
  selector: 'app-lista-municipios',
  templateUrl: './lista-municipios.component.html',
  styleUrls: ['./lista-municipios.component.scss']
})
export class ListaMunicipiosComponent implements OnInit {

  municipios: Municipio[];
  constructor(private localService: LocalService) { }

  ngOnInit() {
    this.loadMunicipios();
  }

  loadMunicipios() {
    this.localService.getMunicipios().subscribe(res => {
      this.municipios = res;
    });
  }
}