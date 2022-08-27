import mongoose, { Model, UpdateQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person, PersonDocument } from 'src/schemas/person.schema';
import { CreatePersonDto } from 'src/dto/createPerson.dto';
import { UpdatePersonDto } from 'src/dto/updatePerson.dto';
import { format } from 'path';


@Injectable()
export class PersonsService {
  constructor(@InjectModel(Person.name) private personModel: Model<PersonDocument>) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {    
    createPersonDto = this.formatDate(createPersonDto)
    
    createPersonDto = this.checkAge(createPersonDto)

    const createdPerson = new this.personModel(createPersonDto);
    return createdPerson.save();
  }

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async find(id : String) : Promise<Person>{
    return this.personModel.findOne({_id: id}).exec();
  }

  async update(id : String, personUpdated : UpdatePersonDto) : Promise<any> {
    return this.personModel.updateOne({_id : id}, {$set: {...personUpdated}}).exec();
  }

  async delete(id : String) : Promise<any> {
    return this.personModel.deleteOne({_id : id}).exec();
  }

  async getCpf(id : String) : Promise<String>{
    let person = new Person()
    person = await this.personModel.findOne({_id : id}).exec();
    return person.cpf;
  }

  formatDate(dto : CreatePersonDto){
    const [ano, mes, dia] = dto.dataNascimento.split('-');
    
    dto.dataNascimento = dia + "/" + mes + "/" + ano

    return dto;
  }

  checkAge(dto : CreatePersonDto) {
    const [ano, mes, dia] = dto.dataNascimento.split('/');
    
    let date = new Date(+mes,+dia,+ano);
    let sysDate = new Date();


    if(sysDate.getFullYear() - date.getFullYear() > 18){
      dto.isAdult = true;
    } else {
      dto.isAdult = false;
    }
    
    return dto;
  }
}