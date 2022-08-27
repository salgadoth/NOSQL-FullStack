import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PersonsComponent } from './persons.component';
import { AddPersonComponent } from '../add-person/add-person.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonsComponent,
    AddPersonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    PersonsComponent,
    AddPersonComponent
  ]
})
export class PersonsModule { }
