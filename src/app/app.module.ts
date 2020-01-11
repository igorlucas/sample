import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';

import { DemoComponent } from './pages/demo/demo.component';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListaEstadosComponent } from './pages/locais/lista-estados/lista-estados.component';
import { ListaMunicipiosComponent } from './pages/locais/lista-municipios/lista-municipios.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DemoComponent,
    SidenavComponent,
    CreateUserComponent,
    ListaEstadosComponent,
    ListaMunicipiosComponent
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}