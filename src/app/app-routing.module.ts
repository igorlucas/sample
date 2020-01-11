import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListaEstadosComponent } from './pages/locais/lista-estados/lista-estados.component';
import { ListaMunicipiosComponent } from './pages/locais/lista-municipios/lista-municipios.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: '', component: AppComponent },
  { path:'usuarios',  component: CreateUserComponent },
  { path: 'demo', component: DemoComponent },
  { path:'estados',  component: ListaEstadosComponent },
  { path:'municipios',  component: ListaMunicipiosComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
