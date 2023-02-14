import { isString } from "class-validator";
import { IsDefined, IsEmpty, IsNumber, IsString } from "class-validator/types/decorator/decorators";

export default class NewMusicDto{
    
    @IsString()
    @IsDefined({message:'Az zene neve nem lehet üres'})
    name:string;

    @IsNumber()
    @IsDefined({message:'Az év nem lehet üres'})
    realase_year: number;


}