import { MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { Estado } from 'src/app/models/interfaceModels/estado';
import { Regiao } from 'src/app/models/interfaceModels/regiao';

@Component({
  selector: 'app-lista-estados',
  templateUrl: './lista-estados.component.html',
  styleUrls: ['./lista-estados.component.scss']
})
export class ListaEstadosComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  estados: Estado[];
  regioes: Regiao[];

  // MatPaginator Inputs
  itensPageLength: number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  //pageEvent: PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  constructor(private localService: LocalService) { }

  ngOnInit() {
    this.loadRegioes();
    this.loadPageEstados();
  }

  ngAfterViewInit() {
  }


  loadPageEstados() {
    this.localService.getEstados().subscribe(res => {
      this.itensPageLength = res.length;
      var pos = this.paginator.pageSize + (this.paginator.pageIndex * this.paginator.pageSize);
      var pre = pos - this.paginator.pageSize;
      this.estados = res.splice(pre, pos);
    });
  }

  loadRegioes() {
    this.localService.getRegioes().subscribe(res => {
      this.regioes = res;
    });
  }

}
