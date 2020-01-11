// import { ApiService } from './api.service';
// import { Observable } from 'rxjs';
// import { Injectable, EventEmitter } from '@angular/core';
// import { MessageDTO } from '../model/messgeDTO';
// import { User } from '../model/user';

// @Injectable()
// export class UserService {

//   UserEventMitter = new EventEmitter<User>();
//   constructor(private apiService: ApiService) { }

//   getById(id: number): Observable<MessageDTO> {
//     return this.apiService.get(`users/${id}`);
//   }

//   getUsers(): Observable<MessageDTO> {
//     return this.apiService.get(`users`);
//   }

//   save(user: User): Observable<MessageDTO> {
//     return this.apiService.post(`users`, user);
//   }

//   delete(id: number): Observable<void> {
//     return this.apiService.delete(`users/${id}`);
//   }

//   edit(id: number, user: User): Observable<void> {
//     return this.apiService.put(`users/${id}`, user);
//   }

// }