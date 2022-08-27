import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private httpClient: HttpClient) { }

  getPersons() : Observable<Object>{
    return this.httpClient.get('http://localhost:3000/persons/findAll');
  }

  createPerson(data : Object) : Object{
    return this.httpClient.post('http://localhost:3000/persons/create', data)
    .subscribe((result) => {
      console.warn("result: ", result)
    });
  }
}
