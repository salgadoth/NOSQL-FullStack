import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type PersonDocument = Person & Document;

@Schema()
export class Person{
    @Prop()
    nome: String;

    @Prop()
    cpf: String;
    
    @Prop()
    email: String;
    
    @Prop()
    telefone: String;
    
    @Prop()
    sexo: String;
    
    @Prop()
    dataNascimento: String;

    @Prop()
    isAdult: Boolean;
}

export const PresonSchema = SchemaFactory.createForClass(Person);