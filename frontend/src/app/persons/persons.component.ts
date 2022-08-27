import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.sass']
})
export class PersonsComponent implements OnInit {

  persons$: Observable<any> | undefined;

  constructor(private personsService : PersonsService) { }

  ngOnInit(): void {
    this.persons$ = this.personsService.getPersons()
  }

}
