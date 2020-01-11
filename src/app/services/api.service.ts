// import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
// import { throwError,Observable } from "rxjs";
// //import { Observable } from 'rxjs/Observable';
// import { environment } from '../../environments/environment';
// import { map, filter, catchError, mergeMap } from 'rxjs/operators';
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// @Injectable()
// export class ApiService {
//   constructor(private http: HttpClient) {}

//    private setHeaders(): HttpHeaders {
//      const headersConfig = {
//        'Content-Type': 'application/json',
//        'Accept': 'application/json'
//      };
//      return new HttpHeaders(headersConfig);
//    }

//   private formatErrors(error: any) {
//     return throwError(error.error);
//   }

//   get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
//     //return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), params: params })
//     return this.http.get(`${environment.api_url}${path}`, { params: params })
//       .pipe(catchError(this.formatErrors.toString));
//   }

//   put(path: string, body: Object = {}): Observable<any> {
//     return this.http.put(
//       `${environment.api_url}${path}`,
//       JSON.stringify(body), httpOptions
//     ).pipe(catchError(this.formatErrors.toString));
//   }

//   post(path: string, body: Object = {}): Observable<any> {
//     return this.http.post(
//       `${environment.api_url}${path}`,
//       JSON.stringify(body), httpOptions
//     ).pipe(catchError(this.formatErrors.toString));
//   }

//   delete(path): Observable<any> {
//     return this.http.delete(
//       `${environment.api_url}${path}`
//     ).pipe(catchError(this.formatErrors.toString));
//   }

  
//   getVersion(): any{
//   //return this.get(`version`);
//   return '1.0';
//   }
// }
