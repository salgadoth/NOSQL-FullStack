import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { PersonsModule } from './person/persons.module';

@Module({
  imports: [
    MongooseModule.forRoot("MONGODB_CREDENTIALS"),
    PersonsModule
  ]
})
export class AppModule {}
