import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type UserDocument = Document & User;

@Schema({timestamps: true})
export class User{

    @Prop({required:true, unique:true, lowercase:true})
    username:string;

    @Prop({required:true, unique:true, lowercase:true})
    email:string;

    @Prop({required:true, min:8})
    password:string;

    @Prop({required:true})
    gender:string;

    @Prop({required:true, min:10})
    phone:string;
}

export const UserSchema = SchemaFactory.createForClass(User)