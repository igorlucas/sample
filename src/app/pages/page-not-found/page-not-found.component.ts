import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-page-not-found',
//   templateUrl: './page-not-found.component.html',
//   styleUrls: ['./page-not-found.component.scss']
// })

@Component({
  template: `
    <div class="container">
      <h1 class="text-center">Página não encontrada!</h1>
    <div>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
