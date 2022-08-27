import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons/persons.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.sass']
})
export class AddPersonComponent implements OnInit {

  constructor(private personsService : PersonsService) { }

  onSubmit(data : Object){
    // console.warn(data)
    this.personsService.createPerson(data);
    // window.location.reload();
  }

  ngOnInit(): void {
  }

}
