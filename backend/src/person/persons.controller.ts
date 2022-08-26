import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreatePersonDto } from 'src/dto/createPerson.dto';
import { UpdatePersonDto } from 'src/dto/updatePerson.dto';
import { Person } from 'src/schemas/person.schema';
import { PersonsService } from './persons.service';


@Controller('persons')
export class PersonsController{
    constructor(private personService : PersonsService){}

    @Post('create')
    async create(@Body() createPersonDto: CreatePersonDto) : Promise<Person>{
        return this.personService.create(createPersonDto);
    }

    @Get('findAll')
    async findAll() : Promise<Person[]>{
        return this.personService.findAll();
    }

    @Get('find/:id')
    async find(@Param('id') id : String) : Promise<Person>{
        return this.personService.find(id);
    }

    @Get('find/cpf/:id')
    async getCpf(@Param('id') id : String) : Promise<String>{
        return this.personService.getCpf(id);
    }

    @Put('update/:id')
    async update(@Param('id') id : String, @Body() updatePerson : UpdatePersonDto){
        return this.personService.update(id, updatePerson);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id : String){
        return this.personService.delete(id);
    }
}