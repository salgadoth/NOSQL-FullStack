import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { PersonsModule } from './person/persons.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://db_user:EdLBIrIyVu8aM1K4@wevo-cluster.g13txai.mongodb.net/?retryWrites=true&w=majority"),
    PersonsModule
  ]
})
export class AppModule {}
