import { PersonsController } from "./persons.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { Person, PresonSchema } from "src/schemas/person.schema";
import { PersonsService } from "./persons.service";

@Module({
    imports: [MongooseModule.forFeature([{name: Person.name, schema: PresonSchema}])],
    controllers: [PersonsController],
    providers: [PersonsService]
})

export class PersonsModule{}