import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Music{
@PrimaryGeneratedColumn()
id:number;

@Column()
name:string;

@Column('int')
realase_year: number;
}